// Components/Organization/OrganizationDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';

const OrganizationDetails = () => {
  const { id } = useParams();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    async function fetchOrganizationDetails() {
      try {
        const response = await fetch(`${config.baseURL}/donor/organization/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch organization');
        }
        const data = await response.json();
        setOrganization(data);
      } catch (error) {
        console.error('Error fetching organization details:', error);
      }
    }

    fetchOrganizationDetails();
  }, [id]);

  if (!organization) {
    return <div className='text-center text-lg'>Loading...</div>;
  }

  return (
    <div className='container mx-auto mt-2 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='w-full mx-auto mb-4 relative'>
          <img
            className='rounded-full w-auto h-40 mx-auto -translate-y-1/2 ml-[500px]'
            src={organization.logo}
            alt={organization.name}
          />
        </div>
        <div className='w-1/2 mx-auto'>
          <h2 className='text-2xl font-bold'>
            <FontAwesomeIcon
              icon={faUserGroup}
              className='bg-white p-2 rounded-full text-sm text-orange-500 mr-3'
            />
            {organization.name}
          </h2>
          <p className='text-gray-600'>{organization.description}</p>
          <p className='text-lg mb-4 w-[600px]'>
            <h2 className='text-2xl font-bold mt-4'>
              <FontAwesomeIcon
                icon={faPaperclip}
                className='bg-white p-2 rounded-full text-orange-500 mr-3'
              />
              History
            </h2>
            <span className='text-4xl font-bold '>
              {organization.history.charAt(0)}
            </span>
            <span>{organization.history.slice(1)}</span>
          </p>
          <div className='flex justify-center mb-4'>
            <Link to='/pay-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                Donate
              </button>
            </Link>
{/* 
            <Link to='/add_org-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                ADD_ORG
              </button>
            </Link>
            <Link to='/register_org-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                REGISTER_ORG
              </button>
            </Link>
            <Link to='/amounts-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                AMOUNTS
              </button>
            </Link>
            <Link to='/b_stories-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                B-STORIES
              </button>
            </Link>
            <Link to='/B&I-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                B & I
              </button>
            </Link>
            <Link to='/add_B&I-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
               Add B & I
              </button>
            </Link> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrganizationDetails;
