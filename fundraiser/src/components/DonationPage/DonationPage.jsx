// Components/DonationPage/DonationPage.jsx
import React from 'react';
import DonationForm from '../DonationsPay/DonationForm';
import Testimonials from './Testimonials';
import OrganizationDetails from '../Organizitons/OrganizationDetails';

function DonationPage({ organization }) {
  return (
    <div className='pl-5'>
      <div className='grid lg:grid-cols-3'>
        <div className='lg:col-span-2 bg-gray-500 flex flex-col items-center justify-center'>
          <OrganizationDetails organization={organization} />
        </div>
        <div className='col-span-1 '>
          <DonationForm />
        </div>
      </div>
      <div className='w-full p-4 mt-4'>
        <Testimonials organization={organization} />
      </div>
    </div>
  );
}

export default DonationPage;
