import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config'; 

const BeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.baseURL}/donor/stories`)
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
      {error ? (
        <div className='text-center text-red-500'>{error}</div>
      ) : (
        <div className='bg-gray-700 mb-5 pt-10 mx-10'>
          <div className='grid grid-cols-1 rounded border shadow-md p-7 md:grid-cols-3 gap-6 bg-white w-3/4 mx-auto justify-center'>
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
                    {new Date(story.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {stories.length > 0 && (
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
    <ul className='flex justify-center mt-3'>
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
