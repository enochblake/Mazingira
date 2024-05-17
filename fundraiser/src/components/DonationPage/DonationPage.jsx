import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrganizationDetails from '../Organizitons/OrganizationDetails';
import TestimonialsTwo from '../StoriesFromUsers/TetimonialsTwo';
import BlogList from './BlogList';
import OrganizationAim from '../Organizitons/OrgAim';
import BeneficiaryStories from '../AddProduct/BeneficiaryStories';

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
          <Link
            to='#'
            className={`mx-4 text-black  font-bold text-lg ${
              selectedContent === 'details'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('details')}
          >
            Details
          </Link>
          <Link
            to='#'
            className={`mx-4 text-black font-bold text-lg ${
              selectedContent === 'testimonials'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('testimonials')}
          >
            Testimonials
          </Link>
          <Link
            to='#'
            className={`mx-4 text-black font-bold text-lg ${
              selectedContent === 'beneficiary-stories' ? 'border-b-4 border-orange-500' : ''
            }`}
            onClick={() => handleContentChange('beneficiary-stories')}
          >
          Stories
          </Link>
        </div>
        {selectedContent === 'details' && (
          <div className='bg-gray-500 mt-20 w-full p-4'>
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
        {selectedContent === 'beneficiary-stories' && <BeneficiaryStories />}
      </div>
    </div>
  );
}

export default DonationPage;
