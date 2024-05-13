import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBeneficiaryStory from './AddBeneficiaryStories';

const BeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('read');

  useEffect(() => {
    axios
      .get('http://localhost:5000/beneficiaryStories')
      .then((response) => {
        setStories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const indexOfLastStory = currentPage * 3;
  const indexOfFirstStory = indexOfLastStory - 3;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='bg-gray-100'>
      <h2 className='text-4xl font-bold text-orange-700 text-center mb-4'>
        BENEFICIARIES STORIES
      </h2>
      <div className='flex justify-center mb-4  '>
        <button
          className={` ${
            activeTab === 'create' ? 'border-b-4 border-orange-500' : ''
          } text-2xl font-bold mr-7`}
          onClick={() => handleTabClick('create')}
        >
          Create
        </button>
        <button
          className={`${
            activeTab === 'read' ? 'border-b-4 border-orange-500' : ''
          } text-2xl font-bold`}
          onClick={() => handleTabClick('read')}
        >
          Read
        </button>
      </div>
      {activeTab === 'create' ? (
        <CreateBeneficiaryStory />
      ) : (
        <div className='bg-gray-700  mb-5 pt-10 mx-10'>
          <div className='grid grid-cols-1 rounded border shadow-md p-7 md:grid-cols-3 gap-6 bg-white w-3/4 mx-auto  justify-center'>
            {currentStories.map((story) => (
              <div key={story.id} className='flex flex-col'>
                <img
                  src={story.image_url}
                  alt={story.title}
                  className='rounded mb-4'
                />
                <div className='pr-7'>
                  <h3 className='text-lg font-bold mb-2'>{story.title}</h3>
                  <p className='text-gray-600 mb-4'>{story.content}</p>
                  <span className='text-sm text-gray-500'>
                    {story.created_at}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {activeTab === 'read' && (
            <Pagination
              storiesPerPage={3}
              totalStories={stories.length}
              paginate={paginate}
            />
          )}
        </div>
      )}
    </div>
  );
};

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='flex justify-center mt-3 '>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className='bg-orange-500 hover:bg-orange-700 text-white font-bold text-xl py-1 px-5 rounded m-2'
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BeneficiaryStories;
