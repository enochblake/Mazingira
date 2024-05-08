import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrganizationComponent() {
  const [organizationDetails, setOrganizationDetails] = useState(null);
  const [nonAnonymousDonors, setNonAnonymousDonors] = useState([]);
  const [anonymousDonations, setAnonymousDonations] = useState([]);
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchOrganizationDetails();
    fetchDonors();
    fetchDonations();
    fetchBeneficiaries();
    fetchInventory();
  }, []);

  const fetchOrganizationDetails = async () => {
    try {
      const response = await axios.get('/api/organization/details');
      setOrganizationDetails(response.data);
    } catch (error) {
      console.error('Error fetching organization details:', error);
    }
  };

  const fetchDonors = async () => {
    try {
      const response = await axios.get('/api/organization/donors');
      setNonAnonymousDonors(response.data.nonAnonymous);
    } catch (error) {
      console.error('Error fetching non-anonymous donors:', error);
    }
  };

  const fetchDonations = async () => {
    try {
      const response = await axios.get('/api/organization/donations');
      setAnonymousDonations(response.data.anonymous);
      setTotalDonationAmount(response.data.totalAmount);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  const fetchBeneficiaries = async () => {
    try {
      const response = await axios.get('/api/organization/beneficiaries');
      setBeneficiaries(response.data);
    } catch (error) {
      console.error('Error fetching beneficiaries:', error);
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/organization/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const renderDonors = () => {
    return (
      <div>
        <h3>Non-Anonymous Donors</h3>
        <ul>
          {nonAnonymousDonors.map(donor => (
            <li key={donor.id}>{donor.name} - {donor.amount}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderDonations = () => {
    return (
      <div>
        <h3>Anonymous Donations</h3>
        <ul>
          {anonymousDonations.map(donation => (
            <li key={donation.id}>{donation.amount}</li>
          ))}
        </ul>
        <p>Total Donation Amount: {totalDonationAmount}</p>
      </div>
    );
  };

  const renderBeneficiaries = () => {
    return (
      <div>
        <h3>Beneficiaries</h3>
        <ul>
          {beneficiaries.map(beneficiary => (
            <li key={beneficiary.id}>{beneficiary.name}</li>
          ))}
        </ul>
      </div>
    );
  };

  const renderInventory = () => {
    return (
      <div>
        <h3>Inventory</h3>
        <ul>
          {inventory.map(item => (
            <li key={item.id}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h2>{organizationDetails ? organizationDetails.name : 'Organization Details'}</h2>
      {organizationDetails && (
        <div>
          <p>Description: {organizationDetails.description}</p>
          <p>Location: {organizationDetails.location}</p>
        </div>
      )}
      {nonAnonymousDonors.length > 0 && renderDonors()}
      {anonymousDonations.length > 0 && renderDonations()}
      {beneficiaries.length > 0 && renderBeneficiaries()}
      {inventory.length > 0 && renderInventory()}
    </div>
  );
}

export default OrganizationComponent;
