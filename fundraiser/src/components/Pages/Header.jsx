import React from 'react';

function Header() {
  return (
    <header className='relative'>
      <div
        className='flex items-center h-screen bg-cover'
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className='container mx-auto'>
          <div className='text-center text-white'>
            <h1 className='text-4xl lg:text-5xl mb-3 font-bold text-orange-500'>
              Mazingira
            </h1>
            <p className='opacity-75 pr-6 mr-6 text-lg text-black font-bold'>
              The time is now for it be okay to be great. People in this world
              shun people for being nice.
            </p>
            <div className='flex justify-center mt-3'>
              <button className='bg-transparent border border-white px-4 py-2 text-white mr-2'>
                Get Started
              </button>
              <button className='text-white'>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;