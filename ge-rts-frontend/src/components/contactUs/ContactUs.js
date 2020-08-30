import React from 'react';
import { useHistory } from 'react-router-dom';

import './ContactUs.scss';

const ContactUs = () => {
  const history = useHistory();

  const goToSurvey = () => history.push('/survey');

  return (
    <section className='contact-us'>
      <div className='contact-us-wrapper'>
        <h1 className='emailform-header'>Try it today</h1>
        <p className='emailform-text'>
          The taste is so incredibly rich and flavorful that everyone will think
          it came straight from your oven instead of ours.
        </p>
        <form className='emailform-form' id='email-form'>
          <input
            className='emailform-form-input'
            name='name'
            type='text'
            placeholder='Name*'
            id='name'
          />
          <input
            className='emailform-form-input'
            name='email'
            type='email'
            placeholder='Email*'
            id='email'
          />
          <input
            className='emailform-form-input'
            name='phoneNumber'
            type='tel'
            placeholder='Phone Number'
            id='phone-number'
          />
          <textarea
            className='emailform-form-input'
            name='message'
            placeholder='Message'
            id='email-message-input'
            cols='30'
            rows='5'
          ></textarea>
          <button className='submit-btn' type='submit' id='submit-button'>
            Submit
          </button>
          <button
            className='survey-btn'
            type='button'
            role='survey-button'
            id='survey-button'
            onClick={goToSurvey}
          >
            Please take our survey
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
