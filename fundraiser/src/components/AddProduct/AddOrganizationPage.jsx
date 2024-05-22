// AddOrganization.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../config';

const AddOrganization = ({ onDetailsSubmit }) => {
  const initialFormData = {
    organizationName: '',
    description: '',
    history: '',
    contactEmail: '',
    phoneNumber: '',
    websiteURL: '',
    selectedCategory: '',
    image_url: '',
    imagePreview: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'description') {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 10) return;
    }

    if (name === 'phoneNumber') {
      if (value.length > 10 || isNaN(value)) return;
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    if (name === 'image_url') {
      handleImageUpload(value);
    }
  };

  const handleImageUpload = (imageUrl) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image_url: imageUrl,
      imagePreview: imageUrl,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${config.baseURL}/org/edit`,
        formData,
        { withCredentials: true }
      );
      console.log('Organization updated successfully:', response.data);
      toast.success('Organization updated successfully');
      setFormData(initialFormData);
      if (onDetailsSubmit) {
        onDetailsSubmit();
      }
    } catch (error) {
      console.error('Error updating organization:', error.response.data);
      toast.error('Error updating organization');
    }
  };

  return (
    // <div className='bg-gray-700 p-10'>
      <div className='container p-8 border border-orange-100 bg-white '>
        <h1 className='text-2xl font-bold mb-5 mx-auto text-center text-orange-700'>
          ADD ORGANIZATION
        </h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-1/2 px-4'>
            <ImagePreview image_url={formData.image_url} />
            <InputField
              label='Image URL'
              name='image_url'
              value={formData.image_url}
              onChange={handleInputChange}
              placeholder='Enter Image URL'
            />
            <CategorySelection
              selectedCategory={formData.selectedCategory}
              handleCategoryChange={handleInputChange}
            />
          </div>
          <div className='w-1/2 px-4 text-lg'>
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
                maxLength={80}
              />
              <TextareaField
                label='History'
                name='history'
                value={formData.history}
                onChange={handleInputChange}
                maxLength={800}
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
        <ToastContainer />
      </div>
    // </div>
  );
};

const ImagePreview = ({ image_url }) => {
  return (
    <div
      className='border-4 border-gray-500 rounded-md mb-2 overflow-hidden'
      style={{ width: '400px', height: '300px' }}
    >
      <img
        className='object-cover w-full h-full'
        src={image_url || 'https://via.placeholder.com/200'}
        alt='Organization Preview'
      />
    </div>
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
          value='air'
          checked={selectedCategory === 'air'}
          onChange={handleCategoryChange}
        >
          Air
        </RadioOption>
        <RadioOption
          value='water'
          checked={selectedCategory === 'water'}
          onChange={handleCategoryChange}
        >
          Water
        </RadioOption>
        <RadioOption
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
        className='form-radio h-5 w-5 text-orange-500 border-orange-500'
        value={value}
        checked={checked}
        onChange={() =>
          onChange({ target: { name: 'selectedCategory', value } })
        }
      />
      <span className='ml-2 text-gray-700'>{children}</span>
    </label>
  );
};

const InputField = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className='mb-2'>
      <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none'
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
