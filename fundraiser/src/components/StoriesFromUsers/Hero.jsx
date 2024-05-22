import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <div
      className='relative flex-grow bg-center bg-cover h-1/2'
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb24lMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D)`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
      <div className='relative container mx-auto px-4 py-16 text-white text-center'>
        <h2 className='text-4xl font-bold mb-4'>TOGETHER WE CAN MAKE</h2>
        <span className='text-4xl font-bold mb-4'> A DIFFERENCE </span>
        <p className='mb-8 mt-3 text-xl'>
          Your support can make a real difference. Together, we can ensure clean
          air, safe water, and healthy soil for future generations.
        </p>
     
          <button 
          className='bg-transparent border border-white px-4 py-2 text-white mr-2' 
           onClick={() => navigate('/about-us')}
            >
                Learn More
              </button>
      </div>
    </div>
  );
}

export default Hero;
