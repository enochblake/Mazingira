//Components/DonationPay/DonationForm.jsx
import React from 'react';
import PayPalPayment from './PayPalPayment';

function DonationForm() {
  const defaultAmount = 10; 

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful', details, data);
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
  };

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-center'>Donation Form</h1>
          <form className='flex flex-col justify-center'>
            <PayPalPayment
              defaultAmount={defaultAmount} 
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonationForm;
