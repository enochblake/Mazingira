import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ title, image, timeToRead, description, index }) => {
  const isEven = index % 2 === 0; // Check if the index is even
  const [expanded, setExpanded] = useState(false);
  const [prevDescription, setPrevDescription] = useState(description);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setPrevDescription(description);
    }
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 mb-6 flex ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className=' mb-4'>
        <img src={image} alt='Blog' className='w-[370px] h-[250px]' />
      </div>
      <div className='flex-1 mt-7 m-7'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm mb-4'>
          Read time:
          <span className='text-orange-500'>{` ${timeToRead} min`}</span>
        </p>
        <p className='text-gray-700 mb-4'>{expanded ? description : `${prevDescription.slice(0, 150)}...`}</p>
        {!expanded && (
          <button onClick={toggleExpanded} className='text-orange-500 font-bold py-2 px-4 rounded'>
            Read More
          </button>
        )}
        {expanded && (
          <span className='text-orange-500 font-bold py-2 px-4 rounded cursor-pointer' onClick={toggleExpanded}>
            Read Less
          </span>
        )}
       
      </div>
    </div>
  );
};



export const blogs = [
  {
    title: 'Combating Environmental Degradation: Encouraging Repeat Donations',
    image: 'https://source.unsplash.com/random/600x400',
    timeToRead: '5',
    description:
      'Environmental degradation is the disintegration of the earth or deterioration of the environment through the consumption of assets, for example, air, water, and soil; the destruction of environments and the eradication of wildlife. It is characterized as any change or aggravation to nature’s turf seen to be pernicious or undesirable. This process leads to the endangerment of the human race, however, there are limited resources to help combat this at this time. One of the ways the organization is looking to raise funds is by encouraging repeat donations. The goal would be to create a platform that allows users to donate to organizations such as this one regularly, to enable the organization to meet their goals. They are looking to create a product that automates the donation process by allowing donors to set up regular donations e.g. monthly donations of stipulated amounts.',
  },
  {
    title: 'Combating Environmental Degradation: Encouraging Repeat Donations',
    image: 'https://source.unsplash.com/random/600x400',
    timeToRead: '5',
    description:
      'Environmental degradation is the disintegration of the earth or deterioration of the environment through the consumption of assets, for example, air, water, and soil; the destruction of environments and the eradication of wildlife. It is characterized as any change or aggravation to nature’s turf seen to be pernicious or undesirable. This process leads to the endangerment of the human race, however, there are limited resources to help combat this at this time. One of the ways the organization is looking to raise funds is by encouraging repeat donations. The goal would be to create a platform that allows users to donate to organizations such as this one regularly, to enable the organization to meet their goals. They are looking to create a product that automates the donation process by allowing donors to set up regular donations e.g. monthly donations of stipulated amounts.',
  },
  {
    title: 'Another Blog Post',
    image: 'https://source.unsplash.com/random/600x400',
    timeToRead: '3',
    description: "This is another blog post. It's about something else.",
  },
];

export default BlogPreview;
