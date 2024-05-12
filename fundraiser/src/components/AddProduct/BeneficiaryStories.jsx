import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BeneficiaryStories = () => {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 3;

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

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className=' bg-gray-700 h-screen w-full '>
      <h2 className='text-4xl font-bold text-orange-700 text-center mb-4 '>
        Beneficiary Stories
      </h2>
      <div className='grid grid-cols-1 rounded border shadow-md p-7 md:grid-cols-3 gap-6 bg-white  w-3/4 mx-auto'>
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
              <span className='text-sm text-gray-500'>{story.created_at}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        storiesPerPage={storiesPerPage}
        totalStories={stories.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ storiesPerPage, totalStories, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='flex justify-center mt-6'>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => paginate(number)}
            className='bg-orange-500 hover:bg-orange-700 text-white font-bold text-lg py-1 px-5 rounded m-4'
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BeneficiaryStories;
