import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    message: 'This is a testimonial from John Doe.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    message: 'This is a testimonial from Jane Doe.',
  },
];

function Testimonials({ organization }) {
  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Testimonials</h1>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-white shadow-md rounded-lg p-8 max-w-sm w-full mx-auto mb-4'
          >
            <p className='text-gray-600'>{testimonial.message}</p>
            <p className='text-gray-600 italic'>- {testimonial.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Testimonials;
