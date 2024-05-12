import React, { useState } from 'react';

const AddOrganization = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [description, setDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); 
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-4'>Add Organization</h1>
      <div className='mb-4'>
        <img
          className='mb-2'
          src={imagePreview || 'https://via.placeholder.com/200'}
          alt='Organization Preview'
          style={{ maxWidth: '200px' }}
        />
        <label className='block text-gray-700 font-bold mb-2' htmlFor='image'>
          Organization Image
        </label>
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageUpload}
          required
        />
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='organizationName'
          >
            Organization Name
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='organizationName'
            type='text'
            placeholder='Enter organization name'
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='description'
            placeholder='Enter organization description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='contactEmail'
          >
            Contact Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='contactEmail'
            type='email'
            placeholder='Enter contact email'
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='phoneNumber'
          >
            Phone Number
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='phoneNumber'
            type='tel'
            placeholder='Enter phone number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 font-bold mb-2'
            htmlFor='websiteURL'
          >
            Website URL
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='websiteURL'
            type='url'
            placeholder='Enter website URL'
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>Category</label>
          <div>
            <label className='inline-flex items-center mr-4'>
              <input
                type='radio'
                className='form-radio text-indigo-600'
                value='air'
                checked={selectedCategory === 'air'}
                onChange={handleCategoryChange}
              />
              <span className='ml-2'>Air</span>
            </label>
            <label className='inline-flex items-center mr-4'>
              <input
                type='radio'
                className='form-radio text-indigo-600'
                value='water'
                checked={selectedCategory === 'water'}
                onChange={handleCategoryChange}
              />
              <span className='ml-2'>Water</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                className='form-radio text-indigo-600'
                value='soil'
                checked={selectedCategory === 'soil'}
                onChange={handleCategoryChange}
              />
              <span className='ml-2'>Soil</span>
            </label>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='button'
            onClick={() => {} /* Handle cancel action */}
          >
            Cancel
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Save
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Save & Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrganization;
