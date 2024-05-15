import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className='main-container p-1 mx-auto rounded-lg w-[90vh] h-[80vh] flex justify-center items-center relative overflow-hidden mt-10'>
      <div className='details-container absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-400 rounded-lg mb-2 text-center z-10 w-1/2'>
        <h4 className='text-white font-bold mt-1 mb-2 font-3xl'>SIGN UP</h4>
        <div className='mt-1 mb-2'>
          <a href='#' className='text-white mr-5'>
            <FacebookIcon />
          </a>
          <a href='#' className='text-white mr-5'>
            <GitHubIcon />
          </a>
          <a href='#' className='text-white'>
            <GoogleIcon />
          </a>
        </div>
      </div>
      <div className='mx-auto text-center p-6 relative z-0'>
        <form
          onSubmit={handleSubmit}
          className='p-5 h-1/2 mt-5 bg-gray-200 relative z-0 rounded-lg pb-6'
        >
          <div className='bg-white p-5 mt-10 rounded'>
            <div className='mb-2'>
              <select
                name='userType'
                value={formData.userType}
                onChange={handleChange}
                className='w-1/2 border-b border-gray-300 focus:outline-none mt-5 text-lg text-black'
              >
                <option value='donor'>DONOR</option>
                <option value='admin'>ADMIN</option>
              </select>
            </div>
            <div className='mb-10 mt-5 grid grid-cols-2 gap-4'>
              <input
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
                className='w-full border-b border-gray-300 focus:outline-none text-lg text-black'
              />
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name'
                className='w-full border-b border-gray-300 focus:outline-none text-lg text-black'
              />
            </div>
            <div className='mb-2'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-black'
              />
            </div>
            <div className='mb-2'>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-black'
              />
            </div>
            <div className='mb-2'>
              <input
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Confirm Password'
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-black'
              />
            </div>

            <div className='mb-1 flex justify-end'>
              <button
                type='submit'
                className='bg-orange-400 text-white p-3 rounded hover:bg-orange-500 mt-10'
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
