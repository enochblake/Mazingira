//components/login-signup/Login.jsx
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; 
import Modal from './Modal'
import SignUp from './SignUp'
import config from '../../config'
export default function Login({ onClose, onSignUpClick }) {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loginAs: 'donor',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

   const handleSubmit = async (e) => {
     e.preventDefault();

     const requestData = {
       email: formData.email,
       password: formData.password,
     };

     let loginEndpoint;
     if (formData.loginAs === 'donor' || formData.loginAs === 'admin') {
       loginEndpoint = `${config.baseURL}/login`;
     } else if (formData.loginAs === 'organization') {
       loginEndpoint = `${config.baseURL}/org/login`;
     }

     try {
       const response = await fetch(loginEndpoint, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(requestData),
       });

       if (response.ok) {
         console.log('Login successful!');
         handleClose();

         if (formData.loginAs === 'organization') {
           navigate('/register_org-pape');
         } else {
           navigate('/all_organizations');
         }
       } else {
         console.error('Login failed:', response.statusText);
       }
     } catch (error) {
       console.error('An error occurred:', error);
     }
   };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className='main-container p-1 mx-auto rounded-lg w-[90vh] h-[80vh] flex justify-center items-center relative overflow-hidden mt-10'>
      <div className='details-container absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-400 rounded-lg text-center z-10 w-1/4'>
        <h4 className='text-white font-bold mt-1 mb-2 font-3xl'>LOGIN</h4>
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
      <div className='mx-auto text-center p-6 relative z-0 w-5/6'>
        <form
          onSubmit={handleSubmit}
          className='form-container p-5 h-1/2 mt-5 bg-gray-200 relative z-0 rounded-lg pb-6'
        >
          <div className='bg-white p-5 mt-10 rounded h-5/6'>
            <div className='mb-2'>
              <select
                name='loginAs'
                value={formData.loginAs}
                onChange={handleChange}
                className='w-full  border-b border-gray-300 focus:outline-none mt-5 text-lg text-black font-bold'
              >
                <option value='donor'>DONOR</option>
                <option value='organization'>ORGANIZATION</option>
                <option value='admin'>ADMIN</option>
              </select>
            </div>
            <div className='mb-2'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-gray-500'
              />
            </div>
            <div className='mb-2'>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-gray-500'
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
            <Link to='#' onClick={onSignUpClick}>
              <p>Don't have an account?</p>
            </Link>
            <button
              onClick={handleClose}
              className=' right-0 m-4 text-gray-600 hover:text-gray-800'
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
