import React, { useState } from 'react';
import Date from '../common/date/Date';

import { createTestimony } from '../../api/testimonials';

import './Survey.scss';

const Survey = () => {
  const [data, setData] = useState({
    call: false,
    eventDate: null,
    eventType: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    facebook: '',
    instagram: '',
    twitter: '',
    testimony: '',
    emailResponse: false,
  });

  const [message, setMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  const onDateChange = (date) => {
    setData({
      ...data,
      eventDate: date._d,
    });
  };

  const onInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.name === 'call' || e.target.name === 'emailResponse'
          ? e.target.checked
          : e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await createTestimony({ data });
      setMessage(res);
      setData({
        ...data,
        call: false,
        eventDate: null,
        eventType: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        facebook: '',
        instagram: '',
        twitter: '',
        testimony: '',
        emailResponse: false,
      });
      setLoading(false);
    } catch (error) {
      setMessage(error);
      setLoading(false);
    }
  };

  return (
    <div className='survey' id='survey'>
      <form className='survey-form' onSubmit={(e) => onFormSubmit(e)}>
        <label
          className='survey-form-call-checkboxlabel'
          htmlFor='call-checkbox'
        ></label>
        <input
          className='survey-form-call-checkbox'
          id='call-checkbox'
          type='checkbox'
          name='call'
          onChange={(e) => onInputChange(e)}
          value={data.call && data.call}
        />
        <label htmlFor=''>Last Touch - Event Date</label>
        <Date onChange={(date) => onDateChange(date)} />
        <label className='survey-form-label' htmlFor='event-type'>
          Event Type
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='eventType'
          id='event-type'
          onChange={(e) => onInputChange(e)}
          value={data.eventType && data.eventType}
        />

        <label className='survey-form-label' htmlFor='first-name'>
          First Name
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='firstName'
          id='first-name'
          onChange={(e) => onInputChange(e)}
          value={data.firstName}
        />

        <label className='survey-form-label' htmlFor='last-name'>
          Last Name
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='lastName'
          id='event-type'
          onChange={(e) => onInputChange(e)}
          value={data.lastName}
        />

        <label className='survey-form-label' htmlFor='email'>
          Email
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='email'
          id='email'
          onChange={(e) => onInputChange(e)}
          value={data.email}
        />

        <label className='survey-form-label' htmlFor='mobile-number'>
          Mobile
        </label>
        <input
          type='tel'
          className='survey-form-input'
          name='mobile'
          id='mobile-number'
          onChange={(e) => onInputChange(e)}
          value={data.mobile}
        />

        <label className='survey-form-label' htmlFor='facebook'>
          Facebook
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='facebook'
          id='facebook'
          onChange={(e) => onInputChange(e)}
          value={data.facebook}
        />

        <label className='survey-form-label' htmlFor='instagram'>
          Instagram
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='instagram'
          id='instagram'
          onChange={(e) => onInputChange(e)}
          value={data.instagram}
        />

        <label className='survey-form-label' htmlFor='twitter'>
          Twitter
        </label>
        <input
          type='text'
          className='survey-form-input'
          name='twitter'
          id='twitter'
          onChange={(e) => onInputChange(e)}
          value={data.twitter}
        />

        <label className='survey-form-label' htmlFor='testimony'>
          Testimony (optional)
        </label>
        <p>Please provide any feedback you wish to share</p>
        <textarea
          type='text'
          className='survey-form-textarea'
          id='testimony'
          name='testimony'
          onChange={(e) => onInputChange(e)}
          value={data.testimony}
        />
        <div className='survey-form-responsecheckbox-wrapper'>
          <input
            className='survey-form-responsecheckbox-wrapper-checkbox'
            id='call-checkbox'
            type='checkbox'
            name='emailResponse'
            onChange={(e) => onInputChange(e)}
            value={data.emailResponse}
          />
          <label
            className='survey-form-responsecheckbox-wrapper-label'
            htmlFor='call-checkbox'
          >
            Send me a copy of my response
          </label>
        </div>

        <button
          className='survey-form-submit-btn'
          id='submit-button'
          role='submit-button'
        >
          Submit
        </button>
        {message && (
          <>
            <p className='survey-form-confirmation-message'>{message.msg}</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Survey;
