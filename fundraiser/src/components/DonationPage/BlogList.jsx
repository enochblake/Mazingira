import React, { useState, useEffect } from 'react';
import BlogPreview from './BlogPreview';
import axios from 'axios'; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs(); 
  }, []); 

  return (
    <div className='bg-gray-700 p-6'>
      <h1 className='text-orange-700 text-4xl font-bold mx-auto text-center'>
        BLOGS.
      </h1>
      <div className='container mx-auto mt-8 p-4'>
        <div className='flex flex-wrap justify-center'>
          {blogs.map((blog, index) => (
            <BlogPreview key={index} {...blog} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
