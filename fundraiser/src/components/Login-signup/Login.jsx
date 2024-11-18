import React, { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Login({ onClose, onSignUpClick }) {
  const navigate = useNavigate();

  const { setAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'donor',
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

   let loginEndpoint = `${config.baseURL}/login`;
   if (formData.role === 'org') {
     loginEndpoint = `${config.baseURL}/org/login`;
   }

   try {
     const response = await axios.post(loginEndpoint, requestData, {
       withCredentials: true,
     });

     if (response.data) {

      //  console.log('Form role:', formData.role);
      //  console.log('Backend role:', response.data.role);

       if (response.data.role !== formData.role) {
         toast.error('Login failed: Role mismatch');
         return;
       }

       toast.success('Login successful!');
       handleClose();
       setAuthenticated(true);

       if (response.data.role === 'admin') {
         navigate('/admin-page');
       } else if (response.data.role === 'org') {
         if (response.data.approval_status === false) {
           navigate('/approvalPending-page');
         } else {
           navigate('/environmental_org');
         }
       } else if (response.data.role === 'donor') {
         navigate('/all_organizations');
       } else {
         toast.error('Login failed: Unknown role');
       }
     } else {
       toast.error('Login failed: ' + response.statusText);
     }
   } catch (error) {
     toast.error('An error occurred: ' + error.message);
   }
 };



  const handleClose = () => {
    onClose();
  };

  return (
    <div className='main-container p-1 mx-auto rounded-lg w-[90vh] h-[80vh] flex justify-center items-center relative overflow-hidden mt-10'>
      <div className='details-container absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-400 rounded-lg text-center z-10 w-1/4'>
        <h4 className='text-white font-bold mt-1 mb-2 font-3xl'>LOGIN</h4>
        {/* <div className='mt-1 mb-2'>
          <a href='#' className='text-white mr-5'>
            <FacebookIcon />
          </a>
          <a href='#' className='text-white mr-5'>
            <GitHubIcon />
          </a>
          <a href='#' className='text-white'>
            <GoogleIcon />
          </a>
        </div> */}
      </div>
      <div className='mx-auto text-center p-6 relative z-0 w-5/6'>
        <form
          onSubmit={handleSubmit}
          className='form-container p-5 h-1/2 mt-5 bg-gray-200 relative z-0 rounded-lg pb-6'
        >
          <div className='bg-white p-5 mt-10 rounded h-5/6'>
            <div className='mb-2'>
              <select
                name='role'
                value={formData.role}
                onChange={handleChange}
                className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg text-black font-bold'
              >
                <option value='donor'>DONOR</option>
                <option value='org'>ORGANIZATION</option>
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
              className='right-0 m-4 text-gray-600 hover:text-gray-800'
            >
              Close
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
