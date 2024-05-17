import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Login-signup/Modal';
import Login from '../Login-signup/Login';
import SignUp from '../Login-signup/SignUp';
import config from '../../config';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);

  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    try {
      await axios.delete(`${config.baseURL}/logout`, { withCredentials: true });
      setAuthenticated(false);
      navigate('/'); // Redirect to homepage after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
      </ul>
      {authenticated ? (
        <div className='flex space-x-4'>
          <button
            onClick={handleLogout}
            className='text-white font-bold text-lg hover:text-orange-500'
          >
            Logout
          </button>
        </div>
      ) : (
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
      )}

      <Modal isOpen={loginModalOpen} onClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
      <Modal isOpen={signupModalOpen} onClose={closeSignupModal}>
        <SignUp onClose={closeSignupModal} />
      </Modal>
    </div>
  );
}

export default Navbar;
