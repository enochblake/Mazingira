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
                <span className='text-sm mr-3 text-orange-600'> Created On: 
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
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};

const Pagination = ({
  storiesPerPage,
  totalStories,
  currentPage,
  paginate,
}) => {
  const [visiblePageNumbers, setVisiblePageNumbers] = useState([1, 2, 3, 4]);
  const totalPages = Math.ceil(totalStories / storiesPerPage);

  useEffect(() => {
    const updateVisiblePages = () => {
      const start = Math.floor((currentPage - 1) / 4) * 4 + 1;
      const end = Math.min(start + 3, totalPages);
      const newVisiblePages = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      );
      setVisiblePageNumbers(newVisiblePages);
    };

    updateVisiblePages();
  }, [currentPage, totalPages]);

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
        Previous
      </button>
      {visiblePageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`bg-orange-500 hover:bg-orange-400 text-white font-bold text-xl py-1 px-5 m-2 rounded ${
            currentPage === number ? 'bg-orange-700' : ''
          }`}
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
