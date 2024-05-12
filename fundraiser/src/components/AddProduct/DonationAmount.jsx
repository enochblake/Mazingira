import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationAmount = () => {
  const [donors, setDonors] = useState([]);
  const [activeType, setActiveType] = useState('non-anonymous');
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalOrganizationAmount, setTotalOrganizationAmount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donationAmount');
      const data = response.data;
      setDonors(data);
      const totalAmount = data.reduce((acc, donor) => acc + donor.amount, 0);
      setTotalAmount(totalAmount);
      const totalOrganizationAmount = data.reduce(
        (acc, donor) => acc + donor.amount,
        0
      );
      setTotalOrganizationAmount(totalOrganizationAmount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  const filteredDonors = donors.filter((donor) => {
    if (activeType === 'non-anonymous') {
      return !donor.anonymous;
    }
    return donor.anonymous;
  });

  const totalAmountForType = filteredDonors.reduce(
    (acc, donor) => acc + donor.amount,
    0
  );

  return (
    <div className='container mx-auto p-4'>
      <div className='flex  mb-4'>
        <span
          className={`px-4 py-2 cursor-pointer ${
            activeType === 'non-anonymous'
              ? 'text-black border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleTypeChange('non-anonymous')}
        >
          Non-Anonymous
        </span>
        <span
          className={`px-4 py-2 cursor-pointer ${
            activeType === 'anonymous'
              ? 'text-black border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleTypeChange('anonymous')}
        >
          Anonymous
        </span>
      </div>
      <div className='flex'>
        <div className='w-1/2'>
          <h2 className='text-lg font-bold'>
            {activeType === 'non-anonymous'
              ? 'Non-Anonymous Donors'
              : 'Anonymous Donors'}
          </h2>
          <ul>
            {filteredDonors.map((donor) => (
              <li key={donor.id}>
                {donor.anonymous
                  ? 'Anonymous'
                  : `${donor.firstName} ${donor.lastName}`}
                : ${donor.amount} (Donated on: {donor.date})
              </li>
            ))}
          </ul>
        </div>
        <div className='w-1/2'>
          <div className='bg-white p-4 rounded shadow-md mb-4'>
            <h2 className='text-lg font-bold'>Total Amount</h2>
            <p className='text-2xl'>${totalAmountForType}</p>
          </div>
          <div className='bg-white p-4 rounded shadow-md'>
            <h2 className='text-lg font-bold'>Total Organization Amount</h2>
            <p className='text-2xl'>${totalOrganizationAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationAmount;
