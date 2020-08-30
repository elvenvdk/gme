import React from 'react';
import Date from '../common/date/Date';

import './Survey.scss';

export default function Survey() {
  return (
    <div className='survey' id='survey'>
      <form className='survey-form'>
        <label
          className='survey-form-call-checkboxlabel'
          htmlFor='call-checkbox'
        >
          Call
        </label>
        <input
          className='survey-form-call-checkbox'
          id='call-checkbox'
          type='checkbox'
        />
        <label htmlFor=''>Last Touoch - Event Date</label>
        <Date />
        <label className='survey-form-label' htmlFor='event-type'>
          Event Type
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          First Name
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Last Name
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Email
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Mobile
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Facebook
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Instagram
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Twitter
        </label>
        <input type='text' className='survey-form-input' id='event-type' />

        <label className='survey-form-label' htmlFor='event-type'>
          Testimony (optional)
        </label>
        <p>Please provide any feedback you wish to share</p>
        <textarea
          type='text'
          className='survey-form-textarea'
          id='event-type'
        />
        <div className='survey-form-responsecheckbox-wrapper'>
          <input
            className='survey-form-responsecheckbox-wrapper-checkbox'
            id='call-checkbox'
            type='checkbox'
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
      </form>
    </div>
  );
}
