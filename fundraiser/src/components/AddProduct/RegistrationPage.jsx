import React, { useState } from 'react';
import {Link} from 'react-router-dom'
function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h2 className='font-bold text-4xl text-center mb-4 '>Work with us</h2>
      <p className='text-center mb-4 w-3/4 text-lg'>
        Divide details about your product or agency work into parts. Write a few
        lines about each one and contact us about any further collaboration. We
        will respond get back to you in a couple of hours.
      </p>
      <div class='max-w-md w-full p-4 bg-white rounded-lg shadow-md mt-4'>
        <h2 class='text-2xl font-bold mb-4'>Organization Registration</h2>
        <form onSubmit={handleSubmit}>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='name'
            >
              Name
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='email'
            >
              Email
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class='mb-4'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='password'
            >
              Password
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='text-center'>
            <button
              className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div>
        <Link to='/add_org-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            ADD_ORG
          </button>
        </Link>
        <Link to='/register_org-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            REGISTER_ORG
          </button>
        </Link>
        <Link to='/amounts-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            AMOUNTS
          </button>
        </Link>
        <Link to='/b_stories-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            B-STORIES
          </button>
        </Link>
        <Link to='/B&I-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            B & I
          </button>
        </Link>
        <Link to='/add_B&I-page'>
          <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4'>
            Add B & I
          </button>
        </Link>
      </div>
    </div>
  );
}


export default RegistrationPage;
