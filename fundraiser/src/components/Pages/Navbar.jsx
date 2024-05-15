//navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Login/Modal';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
function Navbar() {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const handleContentChange = (content) => {
    setSelectedContent(content);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  return (
    <div className='flex justify-between items-center bg-gray-800 p-4'>
      <h3 className='text-white text-3xl font-bold'>🌲 MAZINGIRA</h3>
      <ul className='flex space-x-4 mx-auto font-bold text-xl'>
        <li>
          <Link
            to='/'
            className={`mx-4 text-white font-bold text-lg ${
              selectedContent === 'Home' ? 'border-b-4 border-orange-500' : ''
            }`}
            onClick={() => handleContentChange('Home')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about-us'
            className={`mx-4 text-white font-bold text-lg ${
              selectedContent === 'About' ? 'border-b-4 border-orange-500' : ''
            }`}
            onClick={() => handleContentChange('About')}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/contact-us'
            className={`mx-4 text-white font-bold text-lg ${
              selectedContent === 'Contact'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('Contact')}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to='/all_organizations'
            className={`mx-4 text-white font-bold text-lg ${
              selectedContent === 'AllOrganizations'
                ? 'border-b-4 border-orange-500'
                : ''
            }`}
            onClick={() => handleContentChange('AllOrganizations')}
          >
            All Organizations
          </Link>
        </li>
      </ul>
      <div className='flex space-x-4'>
        <button
          onClick={openLoginModal}
          className='text-white font-bold text-lg hover:text-orange-500'
        >
          Login
        </button>
        <button
          onClick={openSignupModal}
          className='text-white font-bold text-lg hover:text-orange-500'
        >
          Sign Up
        </button>
      </div>
      {/* Login Modal */}
      <Modal isOpen={loginModalOpen} onClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
      {/* Signup Modal */}
      <Modal isOpen={signupModalOpen} onClose={closeSignupModal}>
        <SignUp onClose={closeSignupModal} />
      </Modal>
    </div>
  );
}

export default Navbar;
