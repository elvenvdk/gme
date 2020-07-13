import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/button/Button';
import api from '../../../api';
import './signinForm.scss';

const SigninForm = ({ isSignup, hasForgottenPassword }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState({
    confirmation: null,
    error: null,
  });

  const { username, email, password } = credentials;

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setMessage({
      ...message,
      error: '',
      confirmation: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      const res = await api.register(email, password);
      console.log(res.error);
      if (res.error) {
        console.log({ ERROR: res.error });
        setMessage({
          ...message,
          error: res.error,
        });
        return;
      } else {
        setCredentials({
          // ...credentials,
          username: '',
          email: '',
          password: '',
        });
        setMessage({
          ...message,
          confirmation: 'Signup successful!  Continue shopping.',
        });
      }
    } else if (!isSignup) {
      const res = await api.signin(email, password);
      if (res && res.error) {
        console.log({ ERROR: res.error });
        setMessage({
          ...message,
          error: res.error,
        });
        return;
      } else {
        setMessage({
          ...message,
          confirmation: 'Login in successful',
        });
      }
    }
  };

  console.log({ credentials, message });

  return (
    <div className='signin-wrapper'>
      <h1 className='signin-wrapper-title'>
        {!isSignup ? 'Login' : 'Register'}
      </h1>
      <form action='' className='signin-form'>
        <label htmlFor='signin-form-email' className='signin-form-label'>
          Email Address
        </label>
        <input
          className='signin-form-email'
          id='signin-form-email'
          type='email'
          name='email'
          value={email}
          onChange={(e) => handleChange(e)}
        />
        {!hasForgottenPassword && (
          <>
            <label htmlFor='signin-form-password' className='signin-form-label'>
              Password
            </label>
            <input
              className='signin-form-password'
              id='signin-form-password'
              type='password'
              name='password'
              value={password}
              onChange={(e) => handleChange(e)}
            />
          </>
        )}

        {!isSignup && (
          <section className='remember-me'>
            <input
              className='remember-me-checkbox'
              id='remember-me-checkbox'
              type='checkbox'
            />
            <label htmlFor='remember-me-checkbox' className='remember-me-label'>
              Remember Me
            </label>
          </section>
        )}
        <Button onClick={(e) => handleSubmit(e)}>
          {!isSignup ? 'Log in' : 'Register'}
        </Button>
        {message.confirmation && !message.error && (
          <p>{message.confirmation}</p>
        )}
        {message.error && !message.confirmation && <p>{message.error}</p>}
        {!isSignup && <p>Forgot password?</p>}
        {!isSignup && (
          <Link to='/signup'>
            {' '}
            <p>Don't have an account? Click to register.</p>
          </Link>
        )}
      </form>
    </div>
  );
};

export default SigninForm;
