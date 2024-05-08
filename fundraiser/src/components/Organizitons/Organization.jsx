import React, { useState } from 'react';

function Donor() {
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [donationAmount, setDonationAmount] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [reminder, setReminder] = useState(false);

  const organizations = [
    {
      id: 1,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
    },
    {
      id: 2,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
    },
    {
      id: 1,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
    },
    {
      id: 2,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
    },
    {
      id: 3,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
    },
    {
      id: 4,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
    },
    {
      id: 5,
      name: 'Organization 1',
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 1 description.',
    },
    {
      id: 6,
      name: 'Organization 2',
      logo: 'https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 2 description.',
    },
    {
      id: 7,
      name: 'Organization 3',
      logo: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 3 description.',
    },
    {
      id: 8,
      name: 'Organization 3',
      logo: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JnYW5pemF0aW9ufGVufDB8fDB8fHww',
      description: 'This is organization 3 description.',
    },
  ];

  const handleOrganizationSelect = (organization) => {
    setSelectedOrganization(organization);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
  };

  const handleReminderChange = (event) => {
    setReminder(event.target.checked);
  };

  const handleDonate = () => {
    console.log(`Donating to ${selectedOrganization.name} in the amount of $${donationAmount} with the following options:
      Anonymous: ${isAnonymous}
      Reminder: ${reminder}
    `);
  };

  return (
    <div className='container mx-auto mt-8 p-4'>
      <main className='flex flex-col justify-center'>
        <h1 className='text-3xl font-bold mb-4'>Donate to a Cause</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis soluta molestiae itaque eveniet delectus, dolore possimus repellendus enim nulla sit reprehenderit natus corrupti nisi veniam adipisci quo laborum cum qui? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus excepturi quidem minima suscipit molestiae! Neque, aliquam dolorem obcaecati dicta perspiciatis illum, quisquam ab excepturi nihil sit sed, vitae alias. Eaque.</p>
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
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => handleOrganizationSelect(organization)}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        {selectedOrganization && (
          <div className='flex flex-col justify-center mb-4'>
            <h2 className='text-lg font-bold'>Donation Details</h2>
            <form className='flex flex-col justify-center'>
              <label className='block mb-2'>
                Donation Amount:
                <input
                  type='number'
                  value={donationAmount}
                  onChange={handleDonationAmountChange}
                  className='w-full p-2 pl-10 text-sm text-gray-700'
                />
              </label>
              <label className='block mb-2'>
                Anonymous Donation:
                <input
                  type='checkbox'
                  checked={isAnonymous}
                  onChange={handleAnonymousChange}
                  className='w-full p-2 pl-10 text-smtext-gray-700'
                />
              </label>
              <label className='block mb-2'>
                Reminder:
                <input
                  type='checkbox'
                  checked={reminder}
                  onChange={handleReminderChange}
                  className='w-full p-2 pl-10 text-sm text-gray-700'
                />
              </label>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleDonate}
              >
                Donate
              </button>
            </form>
          </div>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Donor;
