// Components/DonationPage/DonationPage.jsx
import React from 'react';
import OrganizationDetails from '../Organizitons/OrganizationDetails';
import OrganizationAim from '../Organizitons/OrgAim';

function DonationPage({ organization }) {
  return (
    <div className='container mx-auto p-5'>
      <h1 className='text-center text-orange-700 font-bold text-5xl mx-auto mt-4'>
        ORGANIZATION
      </h1>
      <div className='flex flex-wrap w-full'>
        <div className='bg-gray-500 mt-[100px] w-[12200px] p-4'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <OrganizationDetails organization={organization} />
            <div className='lg:w-1/4 w-full lg:pl-4 mt-6 lg:mt-0 pt-[300px]'>
              <OrganizationAim />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-4 mt-4'>
        {/* <Testimonials organization={organization} /> */}
      </div>
    </div>
  );
}

export default DonationPage;