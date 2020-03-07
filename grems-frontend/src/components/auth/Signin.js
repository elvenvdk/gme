import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { signin, authenticate } from '../../auth';

import './Signin.scss';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: false,
    loading: false,
    redirectToReferrer: false,
    message: '',
  });
  const {
    email,
    password,
    error,
    loading,
    redirectToReferrer,
    message,
  } = values;

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signin(email, password)
      .then(data => {
        console.log(data);
        if (data.data.error) {
          setValues({
            ...values,
            error: data.data.error,
          });
        } else {
          authenticate(data.data, () => {
            setValues({
              ...values,
              email: '',
              password: '',
              redirectToReferrer: true,
              message: data.error || data.msg,
            });
          });
        }
      })
      .catch(error => {
        console.log({ error });
      });
  };

  const redirectUser = () => {
    if (redirectToReferrer) return <Redirect to='/' />;
  };

  console.log({ redirectToReferrer, message, error });

  return (
    <div className='signin'>
      <h3 className='signin__title'>Grandma Emmas Customer Signin</h3>
      <form className='signin__form' onSubmit={handleSubmit}>
        <label className='signin__form-label' htmlFor='email'>
          Email
        </label>
        <input
          className='signin__form-input__email'
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={handleChange}
        />
        <label className='signin__form-label' htmlFor='password'>
          Password
        </label>
        <input
          className='signin__form-input__password'
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
        />
        <button className='signin__form__submit' type='submit'>
          Signin
        </button>
        <Link className='signin__signup__link' to='/signup'>
          Not enrolled? Sign Up &rsaquo;
        </Link>
      </form>
      {error && <p className='signin__confirmation'>{error}</p>}
      {redirectUser()}
    </div>
  );
};

export default Signin;
