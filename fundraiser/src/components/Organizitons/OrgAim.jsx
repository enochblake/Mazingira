import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleUnbalancedFlip } from '@fortawesome/free-solid-svg-icons';

const OrganizationAim = () => {
  return (
    <div className='bg-gray-100 shadow-md rounded-lg p-6 mb-6 flex flex-row-reverse'>
      <div className='flex-1'>
        <h2 className='text-2xl font-bold mb-2'>
          <FontAwesomeIcon
            icon={faScaleUnbalancedFlip}
            className='rounded-full p-2 bg-white text-blue-200'
          />
          AIM
        </h2>
        <p className='text-gray-700 mb-4 italic '>~ Fostering Collaboration</p>

        <p className='text-gray-700 mb-4 italic'>
          ~ Raising Awareness <span className='text-orange-500'></span>
        </p>
        <p className='text-gray-700 mb-4 italic'>~ Promoting Sustainability</p>
      </div>
    </div>
  );
};



export default OrganizationAim;
