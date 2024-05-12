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

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'description' && value.length > 500) return;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleImageUpload = ({ target: { files } }) => {
    const file = files[0];
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
      <h1 className='text-2xl font-bold mb-5 mx-auto text-center text-orange-700'>
        ADD ORGANIZATION
      </h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='w-1/2 px-4'>
          <ImagePreview imagePreview={formData.imagePreview} />
          <ImageInput handleImageUpload={handleImageUpload} />
          <CategorySelection
            selectedCategory={formData.selectedCategory}
            handleCategoryChange={handleInputChange}
          />
        </div>
        <div className='w-1/2 px-4'>
          <form onSubmit={handleSubmit}>
            <InputField
              label='Organization Name'
              name='organizationName'
              value={formData.organizationName}
              onChange={handleInputChange}
            />
            <InputField
              label='Contact Email'
              name='contactEmail'
              value={formData.contactEmail}
              onChange={handleInputChange}
            />
            <InputField
              label='Phone Number'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <InputField
              label='Website URL'
              name='websiteURL'
              value={formData.websiteURL}
              onChange={handleInputChange}
            />
            <TextareaField
              label='Description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              maxLength={500}
            />
            <div className='flex items-center justify-between'>
              <Button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => {} /* Handle cancel action */}
              >
                Cancel
              </Button>
              <Button
                className='bg-white hover:bg-orange-700 text-black text-lg font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline border-4 border-orange-500'
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
  );
};

const ImagePreview = ({ imagePreview }) => {
  return (
    <img
      className='border-4 border-gray-500 rounded-md mb-2 w-1/2'
      src={imagePreview || 'https://via.placeholder.com/200'}
      alt='Organization Preview'
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
      <label className='block text-gray-700 font-bold mb-2 mt-5 text-lg'>
        Category
      </label>
      <div>
        <RadioOption
          className='form-radio text-orange-600'
          value='air'
          checked={selectedCategory === 'air'}
          onChange={handleCategoryChange}
        >
          Air
        </RadioOption>
        <RadioOption
          className='form-radio text-orange-600'
          value='water'
          checked={selectedCategory === 'water'}
          onChange={handleCategoryChange}
        >
          Water
        </RadioOption>
        <RadioOption
          className='form-radio text-orange-600'
          value='land'
          checked={selectedCategory === 'land'}
          onChange={handleCategoryChange}
        >
          Land
        </RadioOption>
      </div>
    </div>
  );
};

const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <label className='inline-flex items-center mr-6 cursor-pointer'>
      <input
        type='radio'
        className='form-radio h-5 w-5 text-orange-500'
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className='ml-2 text-gray-700'>{children}</span>
    </label>
  );
};

const InputField = ({ label, name, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

const TextareaField = ({ label, name, value, onChange, maxLength }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      <textarea
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        required
      />
      <div className='text-right text-sm mt-2'>
        {value.length}/{maxLength}
      </div>
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

export default AddOrganization;
