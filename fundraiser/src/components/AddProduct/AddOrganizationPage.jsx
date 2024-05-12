import React, { useState } from 'react';

const AddOrganization = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    description: '',
    contactEmail: '',
    phoneNumber: '',
    websiteURL: '',
    selectedCategory: '',
    image: null,
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-2xl font-bold mb-5 mx-auto text-center text-orange-700 '>
        ADD ORGANIZATION
      </h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-1/2 px-4'>
          <ImagePreview imagePreview={formData.imagePreview} />
          <ImageInput handleImageUpload={handleImageUpload} />
          <CategorySelection
            selectedCategory={formData.selectedCategory}
            handleCategoryChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className='w-1/2 px-4'>
          <form onSubmit={handleSubmit}>
            <FormField
              label='Organization Name'
              name='organizationName'
              value={formData.organizationName}
              onChange={handleInputChange}
            />
            <FormField
              label='Description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
            />
            <FormField
              label='Contact Email'
              name='contactEmail'
              value={formData.contactEmail}
              onChange={handleInputChange}
            />
            <FormField
              label='Phone Number'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <FormField
              label='Website URL'
              name='websiteURL'
              value={formData.websiteURL}
              onChange={handleInputChange}
            />
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
      </div>
    </div>
  );
};

const ImagePreview = ({ imagePreview }) => {
  return (
    <img
      className='border-4 border-gray-500 rounded-md mb-2 w-1/2'
      src={imagePreview || 'https://via.placeholder.com/200'}
      alt='Organization Preview'
      // style={{ maxWidth: '500px' }}
    />
  );
};

const ImageInput = ({ handleImageUpload }) => {
  return (
    <input
      className='shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      id='image'
      type='file'
      accept='image/*'
      onChange={handleImageUpload}
      required
    />
  );
};

const CategorySelection = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <div>
      <label className='block text-gray-700 font-bold mb-2 mt-5 text-lg'>Category</label>
      <div>
        <label className='inline-flex items-center mr-4'>
          <input
            type='radio'
            className='form-radio text-indigo-600'
            value='air'
            checked={selectedCategory === 'air'}
            onChange={(e) => handleCategoryChange(e)}
          />
          <span className='ml-2'>Air</span>
        </label>
        <label className='inline-flex items-center mr-4'>
          <input
            type='radio'
            className='form-radio text-indigo-600'
            value='water'
            checked={selectedCategory === 'water'}
            onChange={(e) => handleCategoryChange(e)}
          />
          <span className='ml-2'>Water</span>
        </label>
        <label className='inline-flex items-center'>
          <input
            type='radio'
            className='form-radio text-indigo-600'
            value='soil'
            checked={selectedCategory === 'soil'}
            onChange={(e) => handleCategoryChange(e)}
          />
          <span className='ml-2'>Soil</span>
        </label>
      </div>
    </div>
  );
};

const FormField = ({ label, name, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-bold mb-2' htmlFor={name}>
        {label}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5'
        id={name}
        type='text'
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default AddOrganization;
