import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
// import bgImage from 'assets/images/bg-sign-in-basic.jpeg';

function About() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <>
      <div
        className='main-container  absolute top-0 left-0 z-1 w-full min-h-screen'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className=' px-2 w-full min-h-screen mx-auto relative z-2'>
        <Grid
          container
          spacing={1}
          justifyContent='center'
          alignItems='center'
          className='h-full'
        >
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3} className='bg-white p-5'>
            <div className='signup-container bg-gradient-to-r from-orange-600 to-blue-400 rounded-lg mx-2 -mt-12 p-2 mb-1 text-center relative z-10'>
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
            {/* <Card className=' pt-7 pb-3 px-3 relative z-0'> */}
              <form className='p-5 w-full' >
                <div className='mb-2'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                </div>
                <div className='mb-2'>
                  <input
                    type='password'
                    placeholder='Password'
                    className='w-full p-2 border border-gray-300 rounded'
                  />
                </div>
                <div className='flex items-center -ml-1 mb-4'>
                  <Switch
                    checked={rememberMe}
                    onChange={handleSetRememberMe}
                  />
                  <span className='text-sm text-gray-600 cursor-pointer ml-1'
                    onClick={handleSetRememberMe}
                  >
                    Remember me
                  </span>
                </div>
                <div className='mb-1'>
                  <button className='w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white p-2 rounded hover:bg-blue-500'>
                    Sign in
                  </button>
                </div>
                <div className='text-center'>
                  <p className='text-sm text-gray-600'>
                    Don't have an account?{' '}
                    <Link
                      to='/authentication/sign-up/cover'
                      className='text-blue-600'
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            {/* </Card> */}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;