import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { signup, authenticate } from '../../auth';

import './Signup.scss';

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: 'false',
    loading: false,
    redirectToReferrer: false,
    message: '',
    emailMsg: {},
  });
  const {
    email,
    password,
    error,
    loading,
    redirectToReferrer,
    message,
    emailMsg,
  } = values;

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password).then(data => {
      if (data.error) {
        console.log({ response_data: data });
        setValues({
          ...values,
          error: data.data.error,
        });
      } else {
        console.log({ data });
        authenticate(data.data, () => {
          setValues({
            ...values,
            email: '',
            password: '',
            redirectToReferrer: !data.data.error ? true : false,
            message: data.data.error || data.msg,
          });
        });
      }
    });
  };

  const redirectUser = () => {
    if (redirectToReferrer) return <Redirect to='/' />;
  };

  console.log({ email, password, error, message });
  return (
    <div className='signup'>
      <h3 className='signup__title'>Grandma Emmas Customer Signup</h3>
      <form className='signup__form' onSubmit={handleSubmit}>
        <label className='signup__form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='signup__form-input__email'
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />
        <label className='signup__form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='signup__form-input__password'
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
        <button className='signup__form__submit' type='submit'>
          Signup
        </button>
        <Link className='signup__signin__link' to='/signin'>
          Already a user? Sign In &rsaquo;
        </Link>
      </form>
      {message && <p className='signup__confirmation'>{message}</p>}
      {redirectUser()}
    </div>
  );
};

export default Signup;
