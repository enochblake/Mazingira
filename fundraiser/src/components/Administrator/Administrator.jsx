
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Administrator = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setOrganizations(response.data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    }
    fetchData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/organizations/${id}/approve`);
      setOrganizations(organizations.map(org => {
        if (org.id === id) {
          return { ...org, status: 'approved' };
        }
        return org;
      }));
    } catch (error) {
      console.error('Error approving organization:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/organizations/${id}/reject`);
      setOrganizations(organizations.map(org => {
        if (org.id === id) {
          return { ...org, status: 'rejected' };
        }
        return org;
      }));
    } catch (error) {
      console.error('Error rejecting organization:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/organizations/${id}`);
      setOrganizations(organizations.filter(org => org.id !== id));
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Administrator Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {organizations.map((org) => (
          <div key={org.id} className="border p-4 rounded-md shadow-md">
            <img src={org.logo} alt={org.name} className="mb-2" />
            <h2 className="text-lg font-bold mb-2">{org.name}</h2>
            <p className="text-gray-600 mb-2">{org.description}</p>
            <p className="text-gray-600 mb-4">{org.history}</p>
            <div className="flex justify-between">
              {org.status !== 'approved' && (
                <button
                  onClick={() => handleApprove(org.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Approve
                </button>
              )}
              {org.status !== 'rejected' && (
                <button
                  onClick={() => handleReject(org.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Reject
                </button>
              )}
              <button
                onClick={() => handleDelete(org.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administrator;

