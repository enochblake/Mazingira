//components/organization/Organization.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

  export const organizations = [
    {
      id: 10,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 12,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 1,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 2,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 3,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 4,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 5,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 6,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 7,
      name: 'Organization 3',
      logo: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 3 description.',
      history: `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`,
    },
    {
      id: 8,
      name: 'Organization 3',
      logo: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 3 description.',
     history:
          `The Green Earth Initiative was founded in 2005 by a group of passionate environmentalists who were concerned about the rapid degradation of the planet.
         Our founders, led by Sarah Johnson, a renowned environmental scientist, were determined to make a difference and create a sustainable future for generations to come.In the early years, our organization focused on raising awareness about environmental issues through educational programs, community outreach, and advocacy campaigns.
         We partnered with local schools, community groups, and businesses to promote sustainable practices and reduce waste.`
    },
  ];
function Organization() {
  
  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold mb-4 mx-auto'>Donate to a Cause</h1>
        <p className='mx-auto text-center'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          soluta molestiae itaque eveniet delectus, dolore possimus repellendus
          enim nulla sit reprehenderit natus corrupti nisi veniam adipisci quo
          laborum cum qui? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Necessitatibus excepturi quidem minima suscipit molestiae!
          Neque, aliquam dolorem obcaecati dicta perspiciatis illum, quisquam ab
          excepturi nihil sit sed, vitae alias. Eaque.
        </p>
        <div className='flex flex-wrap justify-center mb-4'>
          {organizations.map((organization, index) => (
            <div
              key={organization.id}
              className={`w-full md:w-1/3 lg:w-1/4 p-4 ${
                index % 3 === 0 && 'clear-left'
              }`}
            >
              <img src={organization.logo} alt={organization.name} />
              <h2 className='text-lg font-bold'>{organization.name}</h2>
              <p className='text-gray-600'>{organization.description}</p>
              <Link to={`/donation-page/${organization.id}`}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Select
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Organization;
