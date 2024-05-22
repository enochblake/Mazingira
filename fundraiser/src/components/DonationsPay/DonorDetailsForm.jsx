import React, { useState } from 'react';

function DonorDetailsForm({ onSubmit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAmount(amount)) {
      onSubmit({ firstName, lastName, email, address, message, amount });
    }
  };

  const validateAmount = (value) => {
    if (isNaN(value) || value <= 0) {
      setAmountError('Please enter a valid donation amount greater than zero.');
      return false;
    } else {
      setAmountError('');
      return true;
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setAmountError('');
    } else {
      setAmountError('Please enter a valid number.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='mb-4'>
          <label
            htmlFor='firstName'
            className='block text-gray-700 font-bold text-lg mb-2'
          >
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='lastName'
            className='block text-gray-700 font-bold text-lg mb-2'
          >
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
        </div>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 font-bold text-lg mb-2'
        >
          Email Address
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='address'
          className='block text-gray-700 font-bold text-lg mb-2'
        >
          Physical Address
        </label>
        <textarea
          id='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          rows='3'
          required
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block text-gray-700 font-bold text-lg mb-2'
        >
          Message
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          rows='3'
        ></textarea>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='amount'
          className='block text-gray-700 font-bold text-lg mb-2'
        >
          Donation Amount ($)
        </label>
        <input
          type='number'
          id='amount'
          value={amount}
          onChange={handleAmountChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          min='0'
          step='0.01'
          required
        />
        {amountError && (
          <p className='text-red-500 text-sm mt-2'>{amountError}</p>
        )}
      </div>
      <div className='flex justify-end'>
        {/* <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button> */}
      </div>
    </form>
  );
}

export default DonorDetailsForm;
