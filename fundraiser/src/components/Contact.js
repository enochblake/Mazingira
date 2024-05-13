import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbyFJXSPJehPhlw5ySHiQJnVEJJMxT-mARtcui-Lb2wDwqvaZEK0Hbyso4sWHMHOdNwL/exec';
    const form = e.target;
    const msg = document.getElementById('msg');

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form),
      });
      if (response.ok) {
        msg.innerHTML = 'Your message has been sent successfully!';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 5000);
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='flex justify-center items-center min-h-screen'
    >
      <div className='w-1/2'>
        <div id='contact'>
          <div className='main-container  absolute top-0 left-0 z-1 w-full min-h-screen' />
          <div className='contact-container '>
            <div className='row'>
              <div className='contact-left p-5'>
                <h1 className='font-bold text-white text-4xl'>
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
                    {' '}
                    ~ Bld Mihail Kogalniceanu, nr. 8
                  </p>
                  <p className='text-lg text-gray-100 ml-10'>
                    {' '}
                    ~ 7652 Bucharest
                  </p>
                  <p className='text-lg text-gray-100 ml-10'> ~ Romania</p>
                </p>

                <p className='font-bold text-2xl text-white mt-5 '>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className='text-3xl
                    text-orange-500'
                  />{' '}
                  Give us a ring
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ Michael Jordan
                  </p>
                  <p className='text-lg text-gray-100 ml-10'>
                    ~ +40 762 321 762{' '}
                  </p>
                  <p className='text-lg text-gray-100 ml-10'> ~ Mon - Fri, 8:00-22:00</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/2 bg-cover bg-center bg-no-repeat'>
        <div className='send-message p-1 mx-auto bg-white rounded-lg w-[90vh] h-[80vh] flex justify-center items-center'>
          <Grid
            container
            spacing={1}
            justifyContent='center'
            alignItems='center'
          >
            <div className='signup-container  bg-orange-400  rounded-lg mx-2 -mt-12 p-2 mb-1 text-center relative z-10 w-[70%] h-[80%]'>
              <h4 className='text-white font-medium mt-1'>Sign in</h4>
              <Grid
                container
                spacing={3}
                justifyContent='center'
                className='mt-1 mb-2 '
              >
                <Grid item xs={2}>
                  <a href='#' className='text-white'>
                    <FacebookIcon />
                  </a>
                </Grid>
                <Grid item xs={2}>
                  <a href='#' className='text-white'>
                    <GitHubIcon />
                  </a>
                </Grid>
                <Grid item xs={2}>
                  <a href='#' className='text-white'>
                    <GoogleIcon />
                  </a>
                </Grid>
              </Grid>
            </div>
            <div className='mx-auto text-center'>
              <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
                <form
                  onSubmit={handleSubmit}
                  className=' p-5 w-[80vh] h-[70vh] mt-5'
                >
                  <div className='mb-10 mt-5 grid grid-cols-2 gap-4 '>
                    <input
                      type='text'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder='First Name'
                      className='w-full border-b border-gray-300 focus:outline-none'
                    />
                    <input
                      type='text'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder='Last Name'
                      className='w-full border-b border-gray-300 focus:outline-none'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Email'
                      className='w-full border-b border-gray-300 focus:outline-none mt-5'
                    />
                  </div>
                  <div className='mb-2'>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your Message'
                      rows='4'
                      className='w-full border-b border-gray-300 focus:outline-none mt-7'
                    ></textarea>
                  </div>

                  <div className='mb-1 flex justify-end '>
                    <button
                      type='submit'
                      className='w-1/4 bg-orange-400  text-white p-3 rounded hover:bg-orange-500 mt-10 '
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Contact;
