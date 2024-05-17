import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link ,useNavigate} from 'react-router-dom';
import config from '../../config';

export default function SignUp({ onClose, onLoginClick }) {
    const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'donor', 
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

    const endpoint =
      formData.userType === 'donor' ? '/register' : '/org/register';

    const requestData =
      formData.userType === 'donor'
        ? {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            password: formData.password,
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

    try {
      const response = await fetch(`${config.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Registration successful!');
         handleClose();

        if (
          formData.userType === 'organization' &&
          responseData.approval_status === false
        ) {
          navigate('/approvalPending-page');
        } else {
          navigate('/all_organizations-page');
        }
      } else {
        console.error('Signup failed:', response.statusText);
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
                <option value='organization'>ORGANIZATION</option>
              </select>
            </div>
            {formData.userType === 'organization' ? (
              <>
                <div className='mb-2 w-[50vh]'>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Organization Name'
                    className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-black'
                  />
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
                SIGN UP
              </button>
            </div>
            <Link to='#' onClick={onLoginClick}>
              <p>Already have an account?</p>
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
