// src/components/Cards.js
import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
      <div className='container mx-auto py-16'>
          <h1 className='mx-auto flex justify-center text-3xl font-bold mb-8'>FEATURED CAUSES</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <Card
          title='Clean Air'
          description='We are working to reduce air pollution and promote clean air initiatives.'
          image='https://plus.unsplash.com/premium_photo-1666874681688-96d130e6c1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcnxlbnwwfHwwfHx8MA%3D%3D'
        />
        <Card
          title='Clean Water'
          description='We are working to ensure access to clean water for everyone, everywhere.'
          image='https://images.unsplash.com/photo-1483691278019-cb7253bee49f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdhdGVyfGVufDB8fDB8fHww'
        />
        <Card
          title='Healthy Soil'
          description='We are working to promote sustainable farming practices and protect soil health.'
          image='https://images.unsplash.com/photo-1618212624319-3cd9681707e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29pbHxlbnwwfHwwfHx8MA%3D%3D'
        />
      </div>
    </div>
  );
};

export default Cards;
