import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden w-3/4'>
      <img className='w-full h-48 object-cover' src={image} alt={title} />
      <div className='p-4'>
        <h3 className='font-bold text-xl mb-2 text-orange-600'>{title}</h3>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
