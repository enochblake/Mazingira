// Components/DonationPay/DonationForm.jsx
import React, { useState } from 'react';
import PayPalPayment from './PayPalPayment';
import DonorDetailsForm from './DonorDetails';

function DonationForm() {
  const defaultAmount = 10;
  const [repeatDonation, setRepeatDonation] = useState(false);
  const [anonymousDonation, setAnonymousDonation] = useState(false);
  const [donorDetails, setDonorDetails] = useState(null);

  const handlePaymentSuccess = (details, data) => {
    console.log('Payment successful', details, data);
    if (repeatDonation) {
    }
  };

  const handlePaymentCancel = () => {
    console.log('Payment canceled');
  };

  const handleRepeatDonationChange = (e) => {
    setRepeatDonation(e.target.checked);
  };

  const handleAnonymousDonationChange = (e) => {
    setAnonymousDonation(e.target.checked);
  };

  const handleDonorDetailsSubmit = (details) => {
    setDonorDetails(details);
  };

  return (
    <div className='container mx-auto mt-8 bg-gray-300 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='bg-white shadow-md rounded-lg p-8  w-full mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-orange-500 text-center'>Donation Now</h1>
          <form className='flex flex-col justify-center'>
            <div className='mb-4'>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  className='form-checkbox h-5 w-5 text-gray-600'
                  onChange={handleRepeatDonationChange}
                />
                <span className='ml-2'>Automated Repeat Donation</span>
              </label>
            </div>
            <div className='mb-4'>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  className='form-checkbox h-5 w-5 text-gray-600'
                  onChange={handleAnonymousDonationChange}
                />
                <span className='ml-2'>Anonymous Donation</span>
              </label>
            </div>
            {!anonymousDonation && (
              <DonorDetailsForm onSubmit={handleDonorDetailsSubmit} />
            )}
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
