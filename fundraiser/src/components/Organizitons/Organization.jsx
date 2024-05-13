//components/organization/Organization.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryBar from './CategoryBar';

export const organizations = [
  {
    id: 10,
    category: 'soil',
    name: 'Organization 1',
    logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 1 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
  {
    id: 12,
    category: 'water',
    name: 'Organization 2',
    logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 2 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
  {
    id: 1,
    category: 'soil',
    name: 'Organization 1',
    logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 1 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
  {
    id: 2,
    category: 'water',
    name: 'Organization 2',
    logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 2 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
  {
    id: 3,
    category: 'air',
    name: 'Organization 1',
    logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 1 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
  {
    id: 4,
    category: 'air',
    name: 'Organization 2',
    logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
    description: 'This is organization 2 description.',
    history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
  },
];
function Organization() {
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'soil', 'water', 'air'];

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
