import React from 'react';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 fixed bottom-0 w-full'>
      <div className='container mx-auto'>
        <p className='text-center'>
          &copy; {new Date().getFullYear()} Mazingira. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
