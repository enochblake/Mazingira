import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const DonationAmount = () => {
  const [donors, setDonors] = useState([]);
  const [activeType, setActiveType] = useState('non-anonymous');
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalOrganizationAmount, setTotalOrganizationAmount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donationAmount');
      const data = response.data;
      setDonors(data);
      calculateTotals(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotals = (data) => {
    const totalAmount = data.reduce((acc, donor) => acc + donor.amount, 0);
    setTotalAmount(totalAmount);
    setTotalOrganizationAmount(totalAmount);
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  const filteredDonors = donors.filter((donor) => {
    if (activeType === 'non-anonymous') {
      return !donor.anonymous_status;
    }
    return donor.anonymous_status;
  });

  const totalAmountForType = filteredDonors.reduce(
    (acc, donor) => acc + donor.amount,
    0
  );

  return (
    <div className='container mx-auto p-4 '>
      <h1 className='text-4xl font-bold text-center mb-4 text-orange-700'>
        Donation Amount Page
      </h1>
      <div className='flex mb-4 mt-7'>
        <span
          className={`px-4 py-2 cursor-pointer text-lg  ${
            activeType === 'non-anonymous'
              ? 'text-black border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleTypeChange('non-anonymous')}
        >
          Non-Anonymous
        </span>
        <span
          className={`px-4 py-2 cursor-pointer text-lg ${
            activeType === 'anonymous'
              ? 'text-black border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleTypeChange('anonymous')}
        >
          Anonymous
        </span>
      </div>
      <div className='flex '>
        <div className='w-full'>
          <h2 className='text-lg font-bold'>
            {activeType === 'non-anonymous'
              ? 'Non-Anonymous Donors'
              : 'Anonymous Donors'}
          </h2>
          <ul className='w-3/4'>
            {filteredDonors.map((donor, index) => (
              <React.Fragment key={donor.id}>
                <li className='flex items-center py-4'>
                  <div>
                    <p className='text-lg'>
                      {donor.anonymous_status ||
                      (!donor.donor_first_name && !donor.donor_last_name)
                        ? 'Anonymous'
                        : `${donor.donor_first_name} ${donor.donor_last_name}`}
                    </p>
                    <p className='text-gray-400 text-lg'>
                      Donated on: {donor.donated_on}
                    </p>
                  </div>
                  <div className='text-orange-500 text-xl font-bold ml-auto'>
                    ${donor.amount}
                  </div>
                </li>
                {index !== filteredDonors.length - 1 && (
                  <li>
                    <hr className='w-full my-2 border-gray-400' />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className='w-1/2 ml-6 '>
          <div className='bg-white p-16 rounded shadow-lg mb-4'>
            <h2 className='text-lg font-bold mx-auto text-center'>
              Total Amount
            </h2>
            <p className='text-2xl text-center'>${totalAmountForType}</p>
          </div>
          <div className='bg-white p-16 rounded shadow-lg flex flex-col items-center'>
            <h2 className='text-lg font-bold text-center'>
              Total Organization Amount
            </h2>
            <p className='text-2xl text-center'>${totalOrganizationAmount}</p>
            <Link to='/pay-page'>
              <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-5 rounded mt-4'>
                Donate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationAmount;
