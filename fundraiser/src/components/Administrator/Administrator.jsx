
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Administrator = () => {
  const [organizations, setOrganizations] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setOrganizations(response.data);
        setSearchResults(response.data);
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
      window.alert('Organization approved successfully!');
    } catch (error) {
      console.error('Error approving organization:', error);
      window.alert('Failed to approve organization. Please try again.');
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
      window.alert('Organization rejected successfully!');
    } catch (error) {
      console.error('Error rejecting organization:', error);
      window.alert('Failed to reject organization. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/organizations/${id}`);
      setOrganizations(organizations.filter(org => org.id !== id));
      window.alert('Organization deleted successfully!');
    } catch (error) {
      console.error('Error deleting organization:', error);
      window.alert('Failed to delete organization. Please try again.');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterResults(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterResults(filter, e.target.value);
  };

  const filterResults = (filter, searchTerm = '') => {
    let filteredOrgs = organizations.filter(org => {
      if (filter === 'all') {
        return true;
      }
      return org.status === filter;
    });

    if (searchTerm !== '') {
      filteredOrgs = filteredOrgs.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSearchResults(filteredOrgs);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-5">Administrator Dashboard</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">Filter By:</label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="all">All</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by organization name"
          value={searchTerm}
          onChange={handleSearch}
          className="bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {searchResults.map((org) => (
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


