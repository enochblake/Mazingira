import React from 'react';
function ApprovalPending() {

  return (
    <div class='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h2 className='font-bold text-4xl text-center mb-4 '>Work with us</h2>
      <p className='text-center mb-4 w-3/4 text-lg'>
        Divide details about your product or agency work into parts. Write a few
        lines about each one and contact us about any further collaboration. We
        will respond get back to you in a couple of hours.
      </p>
          <div className='bg-white p-10 rounded shadow-lg text-center'>
            <h2 className='text-4xl font-bold text-orange-500 mb-4'>
              Approval Pending
            </h2>
            <p className='text-gray-700 text-lg'>
              Your registration as an organization is currently pending
              approval. You will be notified once the approval process is
              complete.
            </p>
          </div>
    
    </div>
  );
}

export default ApprovalPending;


