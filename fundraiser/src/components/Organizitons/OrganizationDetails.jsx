// components/Organization/OrganizationDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { organizations } from './Organization';

function OrganizationDetails() {
  const { id } = useParams();
  const organization = organizations.find((org) => org.id === parseInt(id));

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='w-1/2'>
          <img src={organization.logo} alt={organization.name} />
          <h2 className='text-lg font-bold'>{organization.name}</h2>
          <p className='text-gray-600'>{organization.description}</p>
          <p>{organization.history}</p>
        </div>
      </main>
    </div>
  );
}

export default OrganizationDetails;

