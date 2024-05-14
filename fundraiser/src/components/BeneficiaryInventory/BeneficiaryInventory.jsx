import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddBeneficiary from './AddBeneficiary';

const BeneficiaryInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedContent, setSelectedContent] = useState('inventory');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const inventoryResponse = await axios.get(
        'http://localhost:5000/inventory'
      );
      const inventoryData = inventoryResponse.data;
      setInventory(inventoryData);
      calculateTotalAmount(inventoryData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotalAmount = (inventoryData) => {
    const total = inventoryData.reduce(
      (acc, item) => acc + item.received_amount,
      0
    );
    setTotalAmount(total);
  };

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='bg-gray-100 '>
      <h1 className='text-4xl font-bold text-center mb-4 text-orange-700'>
        Beneficiary & Inventory
      </h1>
      <div className='flex justify-center my-4'>
        <Link
          to='#'
          className={`mx-4 text-black  font-bold text-lg ${
            selectedContent === 'inventory'
              ? 'border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleContentChange('inventory')}
        >
          Inventory
        </Link>
        <Link
          to='#'
          className={`mx-4 text-black font-bold text-lg ${
            selectedContent === 'beneficiaries'
              ? 'border-b-4 border-orange-500'
              : ''
          }`}
          onClick={() => handleContentChange('beneficiaries')}
        >
          Beneficiaries
        </Link>
      </div>

      {selectedContent === 'inventory' && (
        <div className='bg-gray-700 min-h-screen  p-16 mx-10 mb-2'>
          <div className='container mx-auto border shadow-md mt-4 bg-gray-100 w-4/7 justify-center text-center p-4 pl-5'>
            <div className='flex mb-4 mt-7'>
              <h2 className='text-lg font-bold'>Beneficiaries</h2>
            </div>
            <div className='flex'>
              <div className='w-full'>
                <div className='max-h-96 overflow-y-auto'>
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
                              Donated on: {item.donated_on}
                            </p>
                          </div>
                          <div className='text-orange-500 text-xl font-bold ml-auto'>
                            ${item.received_amount}
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

              <div className='w-1/2 ml-6'>
                <div className='total-Amount-container bg-white p-16 rounded shadow-lg mb-4'>
                  <h2 className='text-lg font-bold mx-auto text-center'>
                    Total Amount
                  </h2>
                  <p className='text-2xl text-center'>${totalAmount}</p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedContent === 'beneficiaries' && <AddBeneficiary />}
    </div>
  );
};

export default BeneficiaryInventory;
