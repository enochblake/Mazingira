import React from 'react';
import DonationForm from './DonationForm'; 

function PayPage() {
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
    <div className='w-full'>
      <DonationForm />
     
      </div>
      </div>
  );
}

export default PayPage;
