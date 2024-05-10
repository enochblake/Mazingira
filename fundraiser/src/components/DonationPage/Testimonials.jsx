//components/DonationPage/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    message: `Working with ABC Company has been an absolute pleasure. Their professionalism 
      I highly recommend ABC Company to anyone in need of their services`,
    image:
      'https://images.unsplash.com/photo-1712847333453-740d9665aa5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Jane Doe',
    message: `Working with ABC Company has been an absolute pleasure. Their professionalism 
      I highly recommend ABC Company to anyone in need of their services`,
    image:
      'https://plus.unsplash.com/premium_photo-1683141202259-ee13ddd953fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    name: 'Jane Doe',
    message: `Working with ABC Company has been an absolute pleasure. Their professionalism 
      I highly recommend ABC Company to anyone in need of their services`,
    image:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    name: 'Jane Doe',
    message: `Working with ABC Company has been an absolute pleasure. Their professionalism 
      I highly recommend ABC Company to anyone in need of their services`,
    image:
      'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
  },
 
];

function Testimonials() {
  return (
    <div className='container'>
      <h1 className='font-bold text-3xl font-orange-500 mb-4'>Testimonials</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='bg-white shadow-xl rounded p-8 flex'
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-32 h-32 rounded-full mb-4 mr-4'
            />
            <div className='flex flex-col justify-between'>
              <p className='text-gray-600'>{testimonial.message}</p>
              <p className='text-gray-600 italic'>- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Testimonials;
