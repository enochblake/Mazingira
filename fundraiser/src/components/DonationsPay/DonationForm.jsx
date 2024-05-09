//Components/DonationPay/DonationForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [reminder, setReminder] = useState(false);

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleReminderChange = (event) => {
    setReminder(event.target.checked);
  };

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-center'>Donation Form</h1>
          <form className='flex flex-col justify-center'>
            <label className='block mb-2'>
              Donation Amount:
              <input
                type='number'
                value={donationAmount}
                onChange={handleDonationAmountChange}
                className='w-full p-2 pl-10 text-sm text-gray-700 border rounded'
              />
            </label>
            <label className='block mb-2'>
              Anonymous Donation:
              <input
                type='checkbox'
                checked={isAnonymous}
                onChange={handleAnonymousChange}
                className='w-full p-2 pl-10 text-sm text-gray-700 border rounded'
              />
            </label>
            <label className='block mb-2'>
              Reminder:
              <input
                type='checkbox'
                checked={reminder}
                onChange={handleReminderChange}
                className='w-full p-2 pl-10 text-sm text-gray-700 border rounded'
              />
            </label>
            <Link
              to={{
                pathname: '/pay-page',
                state: {
                  donationAmount: donationAmount,
                  isAnonymous: isAnonymous,
                  reminder: reminder,
                },
              }}
            >
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                Donate
              </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default DonationForm;
