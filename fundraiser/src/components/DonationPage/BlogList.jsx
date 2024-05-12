// DonatePage/bloglist.jsx
import React from 'react';
import BlogPreview, { blogs } from './BlogPreview';

const BlogList = () => {
  return (
    <div className='bg-gray-200 ' >
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
