import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const BeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.baseURL}/donor/stories`, { withCredentials: true })
      .then((response) => {
        if (response.data.message) {
          setError(response.data.message);
        } else {
          setStories(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch stories. Please try again later.');
      });
  }, []);

  const indexOfLastStory = currentPage * 3;
  const indexOfFirstStory = indexOfLastStory - 3;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-gray-100'>
      <div className='text-center text-red-500'>{error}</div>
      <div className='bg-gray-700 mb-5 p-10 mx-5 rounded-lg shadow-md'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 bg-gray-100'>
          {currentStories.map((story) => (
            <div key={story.id} className='bg-white rounded-lg p-5'>
              <img
                src={story.image_url}
                alt={story.title}
                className='rounded w-full h-48 object-cover mb-4'
              />
              <div className='pr-7'>
                <h3 className='text-lg font-bold mb-2'>{story.title}</h3>
                <span className='text-md text-orange-500'>
                  Time to read:{' '}
                  <span style={{ marginLeft: '0.5rem' }}>
                    {story.time_to_read} min
                  </span>
                </span>
                <p className='text-md mt-4'>{story.content}</p>
                <span className='text-sm mr-3 text-orange-600'>
                  Created On:{' '}
                  <span className='text-gray-500'>
                    {new Date(story.created_at).toLocaleDateString()}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(stories.length / 3)}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const visiblePageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i <= currentPage + 2 && i >= currentPage - 2) {
      visiblePageNumbers.push(i);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className='flex justify-center mt-3'>
      <button
        onClick={handlePrevious}
        className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-2 rounded-l mb-2'
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {visiblePageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`${
            currentPage === number ? 'bg-orange-500' : 'bg-gray-300'
          } hover:bg-gray-400 text-white font-bold px-2 mx-1 rounded-md mb-2`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={handleNext}
        className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold px-2 rounded-r mb-2'
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BeneficiaryStories;