import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateBeneficiaryStory from './CreateBeneficiaryStories';
import DonationAmount from './DonationAmount';
import AddBeneficiary from '../BeneficiaryInventory/AddBeneficiary';
import BeneficiaryInventory from '../BeneficiaryInventory/BeneficiaryInventory';
import AddOrganization from './AddOrganizationPage';

function EnvironmentalOrgPage() {
  const [selectedContent, setSelectedContent] = useState('donations');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div
      className='flex items-center min-h-screen bg-cover'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className='container flex  rounded-xl border border-black mx-auto mt-8 p-4 bg-gray-100 bg-cover justify-center mb-2 '>
        <div className='container mx-auto p-5 flex'>
          <div className='w-1/10 mr-5 bg-gray-200 p-5'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661962984775-f8086e609650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk3fHxlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D'
              alt=''
              className='h-1/4 '
            />
            <div className='flex flex-col my-10'>
              <Link
                to='#'
                className={`py-2 text-black font-bold text-lg mb-5 ${
                  selectedContent === 'donations'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
                } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleContentChange('donations')}
              >
                Donations
              </Link>
              <Link
                to='#'
                className={`py-2 text-black font-bold text-lg mb-5 ${
                  selectedContent === 'create_stories'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
                } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleContentChange('create_stories')}
              >
                Create Stories
              </Link>
              <Link
                to='#'
                className={`py-2 text-black font-bold text-lg mb-5 ${
                  selectedContent === 'add_beneficiary'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
                } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleContentChange('add_beneficiary')}
              >
                Create Beneficiary
              </Link>
              <Link
                to='#'
                className={`py-2 text-black font-bold text-lg mb-5${
                  selectedContent === 'beneficiary_inventory'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
                } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleContentChange('beneficiary_inventory')}
              >
                Inventory
              </Link>
              <Link
                to='#'
                className={`py-2 text-black font-bold text-lg mb-5 ${
                  selectedContent === 'details'
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
                } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
                onClick={() => handleContentChange('details')}
              >
                Edit Details
              </Link>
            </div>
          </div>
          <div className='w-full pl-4'>
            {selectedContent === 'donations' && <DonationAmount />}
            {selectedContent === 'create_stories' && <CreateBeneficiaryStory />}
            {selectedContent === 'add_beneficiary' && <AddBeneficiary />}
            {selectedContent === 'beneficiary_inventory' && (
              <BeneficiaryInventory />
            )}
            {selectedContent === 'details' && <AddOrganization />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentalOrgPage;
