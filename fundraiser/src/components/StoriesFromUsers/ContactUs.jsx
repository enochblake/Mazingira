import React from 'react';

const ContactSection = () => {
  return (
    <section className='py-7 bg-gradient-dark  overflow-hidden'>
      <img
        className='w-full absolute start-0 top-0 h-100 z-10 opacity-6'
        src='https://images.unsplash.com/photo-1533135091724-62cc5402aa20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
        alt='pattern'
      />
      <div className='container relative z-20'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 flex justify-center flex-col'>
            <h2 className='text-white'>Get in Touch</h2>
            <p className='pe-5 text-white opacity-8 z-10'>
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.
            </p>
            <p className='mt-4 text-white opacity-8 z-10'>
              730 Dyonisie Wolf <br /> Bucharest, RO 010458
            </p>
            <div className='flex p-2 text-white opacity-8 z-10'>
              <i className='material-icons text-sm'>call</i>
              <span className='text-sm ps-3'>(+40) 772 100 200</span>
            </div>
            <div className='flex p-2 text-white opacity-8 z-10'>
              <i className='material-icons text-sm'>email</i>
              <span className='text-sm ps-3'>hello@creative-tim.com</span>
            </div>
            <div className='flex p-2 text-white opacity-8 z-10'>
              <i className='material-icons text-sm'>support</i>
              <span className='text-sm ps-3'>Open Support Ticket</span>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card mt-5 mt-lg-0'>
              <form id='contact-form' method='post' autoComplete='off'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='input-group input-group-static mb-4'>
                        <label>First name</label>
                        <input
                          className='form-control'
                          placeholder='eg. William'
                          aria-label='First Name...'
                          type='text'
                        />
                      </div>
                    </div>
                    <div className='col-md-6 ps-2'>
                      <div className='input-group input-group-static mb-4'>
                        <label>Last name</label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='eg. Smith'
                          aria-label='Last Name...'
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='input-group input-group-static'>
                      <label>Email address</label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='will@creative-tim.com'
                      />
                    </div>
                  </div>
                  <div className='input-group input-group-static mt-4'>
                    <label>Your message</label>
                    <textarea
                      name='message'
                      className='form-control'
                      placeholder='Type here'
                      id='message'
                      rows='3'
                    ></textarea>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-8'>
                      <div className='form-check form-switch flex items-center mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id='flexSwitchCheckDefault'
                          defaultChecked
                        />
                        <label
                          className='form-check-label mb-0 ms-3'
                          htmlFor='flexSwitchCheckDefault'
                        >
                          I agree to the{' '}
                          <a
                            href='javascript:;'
                            className='text-dark underline'
                          >
                            Terms and Conditions
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <button
                        type='submit'
                        className='btn bg-gradient-info mt-3'
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
