import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between items-center bg-gray-800 p-4'>
      <h3 className='text-white text-3xl font-bold'>🌲 MAZINGIRA</h3>
      <ul className='flex space-x-4 mx-auto font-bold text-xl'>
        <li>
          <NavLink
            className='text-white '
            to='/'
            activeClassName='border-b-4 border-orange-700'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-white '
            to='/about'
            activeClassName='border-b-2 border-orange-500'
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-white '
            to='/contact'
            activeClassName='border-b-2 border-orange-500'
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className='text-white '
            to='/authForm'
            activeClassName='border-b-2 border-orange-500'
          >
            AuthForm
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
