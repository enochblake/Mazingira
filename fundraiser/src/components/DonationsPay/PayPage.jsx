//components/DonationPay/PayPage
import React from 'react';

function PayPage({ donationAmount, isAnonymous, reminder }) {
  const handlePayment = () => {
    console.log('Processing payment...');
  };

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-center'>Payment Page</h1>
          <form className='flex flex-col justify-center'>
            <p className='mb-4'>You're donating ${donationAmount}</p>
            <p className='mb-4'>
              {isAnonymous ? 'Anonymous donation' : 'Public donation'}
            </p>
            <p className='mb-4'>
              {reminder ? 'Monthly reminder enabled' : 'No reminder set'}
            </p>
            <button
              className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
              onClick={handlePayment}
            >
              Process Payment
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PayPage;
