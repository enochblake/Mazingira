import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateBeneficiaryStory from './CreateBeneficiaryStories';
import DonationAmount from './DonationAmount';
import AddBeneficiary from '../BeneficiaryInventory/AddBeneficiary';
import BeneficiaryInventory from '../BeneficiaryInventory/BeneficiaryInventory';
import AddOrganization from './AddOrganizationPage';

function EnvironmentalOrgPage() {
  const [selectedContent, setSelectedContent] = useState('details');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto p-5 flex'>
        <div className='w-1/8 mr-10'>
          <div className='flex flex-col my-10'>
            <Link
              to='#'
              className={`py-2 text-black font-bold text-lg mb-5 ${
                selectedContent === 'details'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
              } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
              onClick={() => handleContentChange('details')}
            >
              Add Details
            </Link>
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
              className={`py-2 text-black font-bold text-lg ${
                selectedContent === 'beneficiary_inventory'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-800 hover:text-orange-500 hover:border-orange-500'
              } px-2 py-1 pt-4 rounded-md transition duration-300 ease-in-out`}
              onClick={() => handleContentChange('beneficiary_inventory')}
            >
              Inventory
            </Link>
          </div>
        </div>
        <div className='w-full pl-4'>
          {selectedContent === 'details' && <AddOrganization />}
          {selectedContent === 'donations' && <DonationAmount />}
          {selectedContent === 'create_stories' && <CreateBeneficiaryStory />}
          {selectedContent === 'add_beneficiary' && <AddBeneficiary />}
          {selectedContent === 'beneficiary_inventory' && (
            <BeneficiaryInventory />
          )}
        </div>
      </div>
    </div>
  );
}

export default EnvironmentalOrgPage;
