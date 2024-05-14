import React, { useState } from 'react';

const AddBeneficiary = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    receivedAmount: '',
    imagePreview: '', // Added for image preview
  });

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'imageUrl') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        imagePreview: value, // Update imagePreview when imageUrl changes
      }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className='bg-gray-700 mt-5 pt-10 pb-10 mx-10 min-h-screen'>
      <div className='container mx-auto py-8 bg-gray-100 rounded shadow-md p-5 mb-5 '>
        <h1 className='text-2xl font-bold mb-5 mx-auto text-center text-orange-700'>
          CREATE BENEFICIARY 
        </h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-1/2 px-4'>
            <ImagePreview imagePreview={formData.imagePreview} />
          </div>
          <div className='w-1/2 px-4 text-lg'>
            <form onSubmit={handleSubmit}>
              <InputField
                label='Beneficiary Name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <InputField
                label='Image URL'
                name='imageUrl'
                value={formData.imageUrl}
                onChange={handleInputChange}
              />
              <InputField
                label='Received Amount'
                name='receivedAmount'
                type='number'
                value={formData.receivedAmount}
                onChange={handleInputChange}
              />
              <div className='flex items-center justify-between'>
                <Button
                  className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                  onClick={() => {}}
                >
                  Cancel
                </Button>
                <Button
                  className='bg-white hover:bg-orange-700 text-black text-lg font-bold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline border-4 border-orange-500'
                  type='submit'
                >
                  Save
                </Button>
                <Button
                  className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Save & Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImagePreview = ({ imagePreview }) => {
  return (
    <img
      className='border-4 border-gray-500 rounded-md mb-2'
      src={imagePreview || 'https://via.placeholder.com/200'}
      alt='Organization Preview'
    />
  );
};

const InputField = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className='mb-2'>
      <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const Button = ({
  type,
  children,
  className = 'bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded',
}) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default AddBeneficiary;
