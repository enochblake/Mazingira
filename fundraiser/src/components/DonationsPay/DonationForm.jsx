import React, { useState } from 'react';
import PayPalPayment from './PayPalPayment';
import DonorDetailsForm from './DonorDetailsForm';
import { toast } from 'react-toastify'; 
import Hero from '../StoriesFromUsers/Hero';

function DonationForm() {
  const defaultAmount = 200;
  const [repeatDonation, setRepeatDonation] = useState(false);
  const [anonymousDonation, setAnonymousDonation] = useState(false);
  const [donorDetails, setDonorDetails] = useState(null);
  const [paymentMade, setPaymentMade] = useState(false); 

  const handlePaymentSuccess = (details, data) => {
    setPaymentMade(true); 
    toast.success('Payment successful!'); 
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMade) {
      toast.error('Please make a payment before submitting'); 
    }
  };

  return (
    <div className=''>
      <Hero/>
      <main className='flex flex-col justify-center'>
        <div className='bg-white shadow-md rounded-lg p-8  w-1/2 mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-orange-500 text-center'>Donate Now</h1>
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
                  // onChange={handleAnonymousDonationChange}
                />
                <span className='ml-2'>Anonymous Donation</span>
              </label>
            </div>
            {!anonymousDonation && (
              <DonorDetailsForm onSubmit={handleDonorDetailsSubmit}  />
            )}
            <PayPalPayment
              defaultAmount={defaultAmount}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
            <button
              type='submit'
              className='w-[130px]  bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline'
              disabled={!paymentMade} 
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonationForm;
