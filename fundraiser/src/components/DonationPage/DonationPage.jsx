// Components/DonationPage/DonationPage.jsx
import React from 'react';
import Testimonials from './Testimonials';
import OrganizationDetails from '../Organizitons/OrganizationDetails';
import BlogPreview from './Blogs';
import { blogs } from './Blogs';
function DonationPage({ organization }) {
  return (
    <>
      <div className='pl-5'>
      <h1 className='text-center text-orange-700 font-bold text-5xl mx-auto mt-4'>
        Organization 
      </h1>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2 bg-gray-500 flex flex-col items-center justify-center'>
            <OrganizationDetails organization={organization} />
          </div>
          <div className='container flex rounded-xl border border-black-600 mx-auto mt-8 p-4'>
          <div className='col-span-1 '>
            <h1 className='text-orange-700 font-bold text-1xl mx-auto '>Blogs.</h1>
            {blogs.map((blog, index) => (
              <BlogPreview key={index} {...blog} />
            ))}
          </div>
          </div>
        </div>
        <div className='w-full p-4 mt-4'>
          <Testimonials organization={organization} />
        </div>
      </div>
    </>
  );
}

export default DonationPage;
