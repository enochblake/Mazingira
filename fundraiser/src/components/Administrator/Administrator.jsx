
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import axios from 'axios';
import Organization from '../Organizitons/Organization'; 
import config from '../../config'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Administrator = () => {
  const [organizations, setOrganizations] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [deletedOrgs, setDeletedOrgs] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [organizationsPerPage] = useState(6);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${config.baseURL}/admin`, { withCredentials: true });
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
    await axios.patch(
      `${config.baseURL}/admin/${id}`,
      { approval_status: true },
      { withCredentials: true }
    );
    setOrganizations(
      organizations.map((org) =>
        org.id === id ? { ...org, approval_status: true } : org
      )
    );
    toast.success('Organization approved successfully!');
  } catch (error) {
    console.error('Error approving organization:', error);
    toast.error('Failed to approve organization. Please try again.');
  }
};

const handleReject = async (id) => {
  try {
    await axios.patch(
      `${config.baseURL}/admin/${id}`,
      { approval_status: false },
      { withCredentials: true }
    );
    setOrganizations(
      organizations.map((org) =>
        org.id === id ? { ...org, approval_status: false } : org
      )
    );
    toast.success('Organization rejected successfully!');
  } catch (error) {
    console.error('Error rejecting organization:', error);
    toast.error('Failed to reject organization. Please try again.');
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`${config.baseURL}/admin/${id}`, {
      withCredentials: true,
    });
    setOrganizations(organizations.filter((org) => org.id !== id));
    setDeletedOrgs((prev) => new Set(prev).add(id));
    toast.success('Organization deleted successfully!');
  } catch (error) {
    console.error('Error deleting organization:', error);
    toast.error('Failed to delete organization. Please try again.');
  }
};


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterResults(e.target.value, searchTerm);
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
      else if (filter === 'pending') {
        return org.updated_at === null;
      }
      else if (filter === 'approved') {
        return org.approval_status === true;
      }
      else if (filter === 'rejected') {
        return org.approval_status === false;
      }
    });
  
    if (searchTerm !== '') {
      filteredOrgs = filteredOrgs.filter(org =>
        org.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    setSearchResults(filteredOrgs);
  };  


    const indexOfLastOrganization = currentPage * organizationsPerPage;
    const indexOfFirstOrganization =
      indexOfLastOrganization - organizationsPerPage;
    const currentOrganizations = searchResults.slice(
      indexOfFirstOrganization,
      indexOfLastOrganization
    );

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mx-auto mt-5'>
      <h1 className='text-3xl font-bold mb-5'>Administrator Dashboard</h1>
      <div className='mb-4'>
        <label htmlFor='filter' className='mr-2'>
          Filter By:
        </label>
        <select
          id='filter'
          value={filter}
          onChange={handleFilterChange}
          className='bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300'
        >
          <option value='all'>All</option>
          <option value='pending'>Pending</option>
          <option value='approved'>Approved</option>
          <option value='rejected'>Rejected</option>
        </select>
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by organization name'
          value={searchTerm}
          onChange={handleSearch}
          className='bg-white border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:border-blue-300'
        />
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {currentOrganizations.map((org) => (
          <div
            key={org.id}
            className={`border p-4 rounded-md shadow-md ${
              deletedOrgs.has(org.id) ? 'line-through' : ''
            }`}
          >
            <h2 className='text-lg font-bold mb-2'>{org.name}</h2>
            <p className='text-gray-600 mb-2'>{org.description}</p>
            <p className='text-gray-600 mb-4'>{org.email}</p>

            <div className='flex justify-between'>
              {org.approval_status !== true && (
                <button
                  onClick={() => handleApprove(org.id)}
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'
                >
                  Approve
                </button>
              )}
              {org.approval_status !== false && (
                <button
                  onClick={() => handleReject(org.id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2'
                >
                  Reject
                </button>
              )}
              <button
                onClick={() => handleDelete(org.id)}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4 flex justify-center'>
        <ul className='pagination flex'>
          {Array.from(
            { length: Math.ceil(searchResults.length / organizationsPerPage) },
            (_, i) => (
              <li key={i} className='page-item'>
                <button
                  onClick={() => paginate(i + 1)}
                  className='page-link bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2'
                  style={{ marginRight: '8px' }}
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      <Routes>
        <Route path='/all_organizations' element={<Organization />} />
        <Route path='/admin-page' element={<Organization />} />
        <Route path='/approved_organizations' element={<Organization />} />
        <Route path='/rejected_organizations' element={<Organization />} />
      </Routes>
    </div>
  );
};

export default Administrator;



