import React, { useState } from 'react';

function DonorDetailsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    message: '',
    amount: '',
  });

  const [amountError, setAmountError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAmount(formData.amount)) {
      onSubmit(formData);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setFormData((prevData) => ({ ...prevData, amount: value }));
      setAmountError('');
    } else {
      setAmountError('Please enter a valid number.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className=' p-5  rounded'>
        {/* <div className='mb-10 mt-5 grid grid-cols-2 gap-4'>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder='First Name'
            className='w-full border-b border-gray-300 focus:outline-none text-lg text-gray-900'
          />
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='Last Name'
            className='w-full border-b border-gray-300 focus:outline-none text-lg'
          />
        </div> */}
        {/* <div className='mb-2'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
            className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg'
          />
        </div> */}
        {/* <div className='mb-2'>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleInputChange}
            placeholder='Address'
            className='w-full border-b border-gray-300 focus:outline-none mt-5 text-lg'
          />
        </div> */}
        {/* <div className='mb-2'>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Your Message'
            rows='4'
            className='w-full border-b border-gray-300 focus:outline-none mt-7 text-lg'
          />
        </div> */}
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
            name='amount'
            value={formData.amount}
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
        {/* <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-orange-400 text-white p-3 rounded hover:bg-orange-500 mt-10'
          >
            SEND MESSAGE
          </button>
        </div> */}
      </div>
    </form>
  );
}

export default DonorDetailsForm;
