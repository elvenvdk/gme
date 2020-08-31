import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { contactUs } from '../../api/messanges';

import './ContactUs.scss';

const ContactUs = () => {
  const history = useHistory();
  const [mail, setMail] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const { name, email, phoneNumber, message } = mail;
  const [loading, setLoading] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const goToSurvey = () => history.push('/survey');

  const onInputChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await contactUs({
        from: email,
        to: 'CustomerService@GrandmaEmmas.com',
        subject: `Testimonial from ${name}`,
        phoneNumber,
        html: ` <div>
            <div>${name}</div>
            <hr />
            <div>${phoneNumber}</div>
            <br />
            <div>${message}</div>
          </div>`,
      });
      setConfirmationMessage(res);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(confirmationMessage);

  return (
    <section className='contact-us'>
      <div className='contact-us-wrapper'>
        <h1 className='emailform-header'>Try it today</h1>
        <p className='emailform-text'>
          The taste is so incredibly rich and flavorful that everyone will think
          it came straight from your oven instead of ours.
        </p>
        <form
          className='emailform-form'
          id='email-form'
          onSubmit={(e) => onFormSubmit(e)}
        >
          <input
            className='emailform-form-input'
            name='name'
            type='text'
            placeholder='Name*'
            id='name'
            onChange={(e) => onInputChange(e)}
            value={mail.name}
          />
          <input
            className='emailform-form-input'
            name='email'
            type='email'
            placeholder='Email*'
            id='email'
            onChange={(e) => onInputChange(e)}
            value={mail.email}
          />
          <input
            className='emailform-form-input'
            name='phoneNumber'
            type='tel'
            placeholder='Phone Number'
            id='phone-number'
            onChange={(e) => onInputChange(e)}
            value={mail.phoneNumber}
          />
          <textarea
            className='emailform-form-input'
            name='message'
            placeholder='Message'
            id='email-message-input'
            cols='30'
            rows='5'
            onChange={(e) => onInputChange(e)}
            value={mail.message}
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
