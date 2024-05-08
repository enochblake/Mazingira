import React from 'react';
import DonationForm from './DonationForm';
import Testimonials from './Testimonials';
import OrganizationDetails from '../Organizitons/OrganizationDetails';

function DonationPage({ organization }) {
  return (
    <div className='flex'>
      <div className='w-1/2'>
        <DonationForm />
      </div>
      <div className='w-1/2 p-4'>
        <OrganizationDetails organization={organization} />
        <Testimonials organization={organization} />
      </div>
    </div>
  );
}

export default DonationPage;
