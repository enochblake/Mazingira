import React, { useState } from 'react';
import config from '../../config';
import axios from 'axios';

const CreateBeneficiaryStory = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    imagePreview: null,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === 'content' && value.length > 500) return;
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

    const { title, content, image_url } = formData;

    const postData = {
      title,
      content,
      image_url,
    };

    try {
      const response = await axios.post(
        `${config.baseURL}/createpost`,
        postData,
        {withCredentials: true}
      );
      console.log('Story created:', response.data);
    } catch (error) {
      console.error(
        'Error creating story:',
        error.response ? error.response.data : error.message
      );
      alert(
        'Error creating story: ' +
          (error.response ? error.response.data : error.message)
      );
    }
  };

  return (
    <div className='bg-gray-700 mt-5 p-10 mx-10'>
      <div className='container mx-auto py-8 bg-gray-100 rounded shadow-md p-5 mb-5 '>
        <h1 className='text-2xl font-bold mb-5 mx-auto text-center text-orange-700'>
          CREATE BENEFICIARY STORIES
        </h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-1/2 px-4'>
            <ImagePreview imagePreview={formData.imagePreview} />
          </div>
          <div className='w-1/2 px-4 text-lg'>
            <form onSubmit={handleSubmit}>
              <InputField
                label='Title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
              />
              <InputField
                label='Content'
                name='content'
                value={formData.content}
                onChange={handleInputChange}
              />
              <InputField
                label='Image URL'
                name='image_url'
                value={formData.image_url}
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
                onClick={handleSubmit}
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
      className='border-4 border-gray-500 rounded-md mb-2 h-1/2'
      src={imagePreview || 'https://via.placeholder.com/200'}
      alt='Beneficiary Preview'
    />
  );
};

const InputField = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div className='mb-2'>
      <label className='block text-gray-700 font-bold mb-2'>{label}</label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        type={type}
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

export default CreateBeneficiaryStory;
