import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrganizationDetails from '../Organizitons/OrganizationDetails';
import TestimonialsTwo from '../StoriesFromUsers/TetimonialsTwo';
import BlogList from './BlogList';
import OrganizationAim from '../Organizitons/OrgAim';

function DonationPage() {
  const [selectedContent, setSelectedContent] = useState('details');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto p-5'>
        <h1 className='text-center text-orange-700 font-bold text-5xl mx-auto mt-4'>
          ORGANIZATION
        </h1>
        <div className='flex justify-center my-4'>
          <button
            className='mx-4 text-blue-600 hover:underline'
            onClick={() => handleContentChange('details')}
          >
            Details
          </button>
          <button
            className='mx-4 text-blue-600 hover:underline'
            onClick={() => handleContentChange('testimonials')}
          >
            Testimonials
          </button>
          <button
            className='mx-4 text-blue-600 hover:underline'
            onClick={() => handleContentChange('blogs')}
          >
            Blogs
          </button>
        </div>
        {selectedContent === 'details' && (
          <div className='bg-gray-500 mt-20 w-full  p-4'>
            <div className='flex flex-col lg:flex-row justify-between'>
              <div className='lg:w-3/4 w-full pr-4'>
                <OrganizationDetails />
              </div>
              <div className='lg:w-1/4 w-full lg:pl-4 mt-auto '>
                <OrganizationAim />
              </div>
            </div>
          </div>
        )}
        {selectedContent === 'testimonials' && <TestimonialsTwo />}
        {selectedContent === 'blogs' && <BlogList />}
      </div>
    </div>
  );
}

export default DonationPage;
