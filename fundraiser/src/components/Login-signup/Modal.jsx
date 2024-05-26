import React from 'react';

const Modal = ({ isOpen, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
     
        {children}
    </div>
  );
};

export default Modal;
