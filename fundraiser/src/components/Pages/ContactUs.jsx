import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
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
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='flex justify-center items-center min-h-screen relative'
    >
      <div className='w-1/2'>
        <div id='contact'>
          <div className='contact-container'>
            <div className='row'>
              <div className='contact-left p-5'>
                <h1 className='font-bold text-4xl text-white'>
                  Get in Touch With Us
                </h1>
                <p className='text-xl text-white mt-3 italic mb-5'>
                  Reach out to Mazingira, our platform for positive change! Your
                  donations fuel our mission to create a greener, brighter
                  future. Join us today in making a difference for our planet.
                </p>
                <p className='font-bold text-2xl text-white'>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    className='text-3xl text-orange-500 mr-3'
                  />
                  Find us at the office
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ Bld Mihail Kogalniceanu, nr. 8
                  </p>
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ 7652 Bucharest
                  </p>
                  <p className='text-lg text-gray-100 ml-10'> ~ Romania</p>
                </p>
                <p className='font-bold text-2xl text-white mt-5 '>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className='text-3xl text-orange-500'
                  />
                  Give us a ring
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ Michael Jordan
                  </p>
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ +40 762 321 762{' '}
                  </p>
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ Mon - Fri, 8:00-22:00
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-1/2 bg-cover bg-center bg-no-repeat'> */}
        <div className='main-container p-1 mx-auto  rounded-lg w-[90vh] h-[80vh] flex justify-center items-center relative overflow-hidden'>
          <div className='details-container absolute top-0 left-1/2 transform -translate-x-1/2 bg-orange-400 rounded-lg  mb-2 text-center z-10 w-1/2'>
            <h4 className='text-white font-bold mt-1 mb-2 font-3xl'>
              REACH US
            </h4>
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
              className='p-5  h-1/2 mt-5 bg-gray-200 relative z-0 rounded-lg pb-6 '
            >
              <div className='bg-white p-5 mt-10 rounded '>
                <div className='mb-10 mt-5 grid grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='First Name'
                    className='w-full border-b border-gray-300 focus:outline-none text-lg text-gray-500'
                  />
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder='Last Name'
                    className='w-full border-b border-gray-300 focus:outline-none text-lg'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg'
                  />
                </div>
                <div className='mb-2'>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your Message'
                    rows='4'
                    className='w-full border-b border-gray-300 focus:outline-none mt-7 text-lg'
                  />
                </div>

                <div className='mb-1 flex justify-end'>
                  <button
                    type='submit'
                    className=' bg-orange-400  text-white p-3 rounded hover:bg-orange-500 mt-10'
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default ContactUs;
