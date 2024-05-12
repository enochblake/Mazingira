// Components/Organization/OrganizationDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { organizations } from './Organization';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faUserGroup,faPaperclip} from '@fortawesome/free-solid-svg-icons';


const OrganizationDetails = () => {
  const { id } = useParams();
  const organization = organizations.find((org) => org.id === parseInt(id));

  if (!organization) {
    return <div className="text-center text-lg">Organization not found</div>;
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
            <Link to='/testimonials-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                TESTIMONIALS
              </button>
            </Link>
            <Link to='/blogList-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                Blog
              </button>
            </Link>
            <Link to='/add_org-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
                ADD_ORG
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrganizationDetails;