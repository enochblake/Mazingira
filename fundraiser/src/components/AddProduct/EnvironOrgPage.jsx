import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BeneficiaryInventoryPage from '../BeneficiaryInventory/B&IPage';
import CreateBeneficiaryStory from './CreateBeneficiaryStories';
import DonationAmount from './DonationAmount';

function EnvironmentalOrgPage() {
  const [selectedContent, setSelectedContent] = useState('details');

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto p-5'>
        {/* <h1 className='text-center text-orange-700 font-bold text-5xl mx-auto mt-4'>
          ORGANIZATION STUFF
        </h1> */}
        <div className='flex justify-center my-4'>
          <Link
            to='#'
            className={`mx-4 text-black  font-bold text-lg ${
              selectedContent === 'donations'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('donations')}
          >
            Donations
          </Link>
          <Link
            to='#'
            className={`mx-4 text-black font-bold text-lg ${
              selectedContent === 'create_stories'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('create_stories')}
          >
            Create_Stories 
          </Link>
          <Link
            to='#'
            className={`mx-4 text-black font-bold text-lg ${
              selectedContent === 'inventory' ? 'border-b-4 border-orange-500' : ''
            }`}
            onClick={() => handleContentChange('inventory')}
          >
            Inventory
          </Link>
        </div>
        {selectedContent === 'donations' && <DonationAmount/>}
        {selectedContent === 'create_stories' && <CreateBeneficiaryStory />}
        {selectedContent === 'inventory' && < BeneficiaryInventoryPage/>}
      </div>
    </div>
  );
}

export default EnvironmentalOrgPage;
