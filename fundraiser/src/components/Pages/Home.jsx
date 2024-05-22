//components/pages/Home.jsx
import React from 'react';
import Hero from '../StoriesFromUsers/Hero';
import Cards from '../StoriesFromUsers/Cards';

function Home() {
  return (
    <div className='bg-gray-100'>
      <Hero />
      <Cards/>
      </div>
  );
}

export default Home;