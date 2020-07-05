import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../api';

import './Signup.scss';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });
  const { email, password } = credentials;

  const renderForm = () => (
    <form action='' className='signup-form'>
      <label htmlFor='email' className='signup-email-label'>
        Email
      </label>
      <input
        className='signup-form-email'
        id='email'
        type='email'
        placeholder='Email address'
        value={email}
      />
      <label htmlFor='password' className='signup-password-label'>
        Password
      </label>
      <input
        className='signup-form-password'
        id='password'
        type='password'
        value={password}
      />
    </form>
  );

  return <div className='signup'>{renderForm()}</div>;
};

export default Signup;
