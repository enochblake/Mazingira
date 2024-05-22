import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAsia,
  faMoneyCheck,
  faComments,
  faHandDots,
} from '@fortawesome/free-solid-svg-icons';
import Hero from '../StoriesFromUsers/Hero';

const AboutUs = () => {
  return (
    <>
      <Hero />

      <div className='flex justify-center items-center min-h-screen relative bg-gray-100'>
        <div className='mx-10 p-2 mb-5 h-1/2'>
          <div className='flex flex-col lg:flex-row justify-center mx-10 rounded mt-5'>
            <div className='w-1/2 lg:w-1/2 mt-10'>
              <div className='p-2 flex flex-row'>
                <div className='flex flex-wrap gap-4'>
                  {/* Card 1 */}
                  <div className='w-full mb-4 lg:mb-0 mr-10'>
                    <div className='p-4 rounded-lg'>
                      <p>
                        <FontAwesomeIcon
                          icon={faEarthAsia}
                          className='text-3xl text-orange-500 mr-3'
                        />
                      </p>
                      <h2 className='mt-4 text-2xl mb-3 text-black font-bold'>
                        Environmental Focus
                      </h2>
                      <p className='text-gray-700 text-lg'>
                        Our platform is dedicated to combating environmental
                        degradation by supporting various environmental
                        organizations.
                      </p>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className='w-full mb-5 mt-10 nr-10'>
                    <div className='p-4 rounded-lg'>
                      <p>
                        <FontAwesomeIcon
                          icon={faMoneyCheck}
                          className='text-3xl text-orange-500 mr-3'
                        />
                      </p>
                      <h2 className='mt-4 text-2xl mb-3 text-black font-bold'>
                        Easy Donations
                      </h2>
                      <p className='text-gray-700 text-lg'>
                        Set up automated repeat donations or one-time donations
                        to support organizations of your choice effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className='flex flex-wrap mt-4 gap-6'>
                  {/* Card 3 */}
                  <div className='w-full ml-5 mb-4 lg:mb-0 mr-10'>
                    <div className='p-4 rounded-lg'>
                      <p>
                        <FontAwesomeIcon
                          icon={faHandDots}
                          className='text-3xl text-orange-500 mr-3'
                        />
                      </p>
                      <h2 className='mt-4 text-2xl mb-3 text-black font-bold'>
                        Donor Flexibility
                      </h2>
                      <p className='text-gray-700 text-lg'>
                        Choose to be an anonymous donor or share your
                        information with the organizations you support.
                      </p>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className='w-full mr-4 ml-5'>
                    <div className='p-4 rounded-lg'>
                      <p>
                        <FontAwesomeIcon
                          icon={faComments}
                          className='text-3xl text-orange-500 mr-3'
                        />
                      </p>
                      <h2 className='mt-4 text-2xl mb-3 text-black font-bold'>
                        Impact Stories
                      </h2>
                      <p className='text-gray-700 text-lg'>
                        Read stories about the beneficiaries of your donations
                        and see the positive impact you are making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/4 ml-10'>
              <div className='bg-gray-100 shadow-md p-4'>
                {/* Big card */}
                <div className='p-4 mb-4 rounded-lg'>
                  <img
                    src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
                    alt='Nature'
                    className='rounded mx-auto mb-4'
                  />
                  <div className='text-center'>
                    <h2 className='text-2xl font-semibold mb-2'>
                      Join Us in Making a Difference
                    </h2>
                    <p className='text-gray-600'>
                      Our mission is to combat environmental degradation by
                      supporting various organizations dedicated to preserving
                      nature. Your contributions help us make a significant
                      impact. Together, we can create a sustainable future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
