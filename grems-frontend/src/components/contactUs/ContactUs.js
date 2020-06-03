import React from 'react';

import './ContactUs.scss';

const ContactUs = () => {
  return (
    <section className='contact-us'>
      <div className='contact-us-wrapper'>
        <h1 className='emailform-header'>Try it today</h1>
        <p className='emailform-text'>
          The taste is so incredibly rich and flavorful that everyone will think
          it came straight from your oven instead of ours.
        </p>
        <form className='emailform-form'>
          <input
            className='emailform-form-input'
            name='name'
            type='text'
            placeholder='Name*'
          />
          <input
            className='emailform-form-input'
            name='email'
            type='email'
            placeholder='Email*'
          />
          <input
            className='emailform-form-input'
            name='phoneNumber'
            type='tel'
            placeholder='Phone Number'
          />
          <textarea
            className='emailform-form-input'
            name='message'
            placeholder='Message'
            id=''
            cols='30'
            rows='5'
          ></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
