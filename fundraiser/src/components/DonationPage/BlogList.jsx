import React from 'react';
import BlogPreview, { blogs } from './BlogPreview';

const BlogList = () => {
  return (
    <div className='container flex rounded-xl border border-black-600 mx-auto mt-8 p-4'>
      <div className=' '>
        <h1 className='text-orange-700 font-bold text-4xl mx-auto text-center'>BLOGS.</h1>
        {blogs.map((blog, index) => (
          <BlogPreview key={index} {...blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
