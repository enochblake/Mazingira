import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const BeneficiaryInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.baseURL}/beneficiary`, {
        withCredentials: true,
      });
      const beneficiaryData = response.data;
      setInventory(beneficiaryData);
      calculateTotalAmount(beneficiaryData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotalAmount = (inventoryData) => {
    const total = inventoryData.reduce(
      (acc, item) => acc + item.recieved_amount,
      0
    );
    setTotalAmount(total);
  };

  return (
    <>
    {/* <div className='bg-gray-100 '> */}
      {/* <div className='bg-gray-700   p-10 mx-10 mb-2'> */}
        <div className='container mx-auto border shadow-md  bg-white w-4/7 justify-center text-center p-4 pl-5 min-h-screen'>
          <h1 className='text-xl font-bold text-center mb-4 text-orange-700'>
            List of Beneficiaries
          </h1>
          <div className='flex mb-4 mt-7'>
            <h2 className='text-lg font-bold'>Beneficiaries</h2>
          </div>
          <div className='flex'>
            <div className='w-full'>
              <div className='max-h-screen overflow-y-auto'>
                <ul className='w-3/4'>
                  {inventory.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className='flex py-4'>
                        <div>
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className='w-12 h-12 rounded-full'
                          />
                          <p className='text-lg flex justify-start font-semibold ml-4'>
                            {item.name}
                          </p>
                          <p className='text-gray-400 text-lg'>
                            Donated on: {item.created_at}
                          </p>
                        </div>
                        <div className='text-orange-500 text-xl font-bold ml-auto'>
                          ${item.recieved_amount}
                        </div>
                      </li>
                      {index !== inventory.length - 1 && (
                        <li>
                          <hr className='w-full my-2 border-gray-400' />
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>

            <div className='w-1/2 ml-6  '>
              <div className='total-Amount-container bg-white p-16 rounded shadow-lg mb-4 mt-40'>
                <h2 className='text-xl font-bold mx-auto text-center'>
                  Total Amount
                </h2>
                <p className='text-2xl text-center'>$ {totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      {/* </div> */}
      </>
  );
};

export default BeneficiaryInventory;
