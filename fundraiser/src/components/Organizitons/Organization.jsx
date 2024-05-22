import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryBar from './CategoryBar';
import config from '../../config';


function Organization() {
  const [organizations, setOrganizations] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'soil', 'water', 'air'];


  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const response = await fetch(`${config.baseURL}/donor/organization`);
        if (!response.ok) {
          throw new Error('Failed to fetch organizations');
        }
        const data = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    }

    fetchOrganizations();
  }, []);
  
  const filteredOrganizations =
    activeCategory === 'all'
      ? organizations
      : organizations.filter((org) => org.category === activeCategory);

  return (
    <div
      className='flex items-center min-h-screen bg-cover'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1713494500139-a0d182b60cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className='container flex  rounded-xl border border-black mx-auto mt-8 p-4 bg-gray-100 bg-cover justify-center mb-2 '>
        <CategoryBar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <main className='flex-1 flex-col justify-center'>
          <h1 className='text-4xl text-orange-700 font-bold mb-4 mx-auto text-center '>
            Donate to a Cause
          </h1>
          <p className='mx-auto text-center text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            soluta molestiae itaque eveniet delectus, dolore possimus
            repellendus enim nulla sit reprehenderit natus corrupti nisi veniam
            adipisci quo laborum cum qui? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Necessitatibus excepturi quidem
            minima suscipit molestiae! Neque, aliquam dolorem obcaecati dicta
            perspiciatis illum, quisquam ab excepturi nihil sit sed, vitae
            alias. Eaque.
          </p>
          <div className='flex flex-wrap justify-center gap-4 mb-4 mt-3'>
            {filteredOrganizations.map((organization, index) => (
              <Link
                key={organization.id}
                to={`/donation-page/${organization.id}`}
                className='w-full md:w-1/3 lg:w-1/4 p-4 rounded-xl border border-orange-200'
              >
                <div className='flex flex-col'>
                  <img src={organization.logo} alt={organization.name} />
                  <h2 className='text-lg font-bold mt- '>
                    {organization.name}
                  </h2>
                  <p className='text-gray-600'>{organization.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Organization;
