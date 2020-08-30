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
          type='check-box'
        />
        <label htmlFor=''>Last Touoch - Event Date</label>
        <Date />
      </form>
    </div>
  );
}
