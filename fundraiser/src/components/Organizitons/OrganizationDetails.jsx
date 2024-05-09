// Components/Organization/OrganizationDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { organizations } from './Organization';

function OrganizationDetails() {
  const { id } = useParams();
  const organization = organizations.find((org) => org.id === parseInt(id)); // Removed useParams as the organization data is passed as prop

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='w-full'>
          <img
            className='w-full h-[400px]'
            src={organization.logo}
            alt={organization.name}
          />
          <h2 className='text-lg font-bold pt-5'>{organization.name}</h2>
          <p className='text-balck-600 pt-5'>{organization.description}</p>
          <p className="text-lg pb-5">{organization.history}</p>
        </div>
      </main>
    </div>
  );
}

export default OrganizationDetails;