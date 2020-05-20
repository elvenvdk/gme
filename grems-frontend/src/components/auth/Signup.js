import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

// import { signup, authenticate } from '../../auth';
import { signup, authenticate } from '../../actions/authActions';
import './Signup.scss';

const Signup = props => {
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
    props.signup(email, password);
    setValues({
      ...values,
      email: '',
      password: '',
    });
  };

  const renderError = () => {
    if (props.auth.data && props.auth.data.error) {
      return <p className='signup__confirmation'>{props.auth.data.error}</p>;
    }
  };

  const redirectUser = () => {
    if (props.auth.isLoggedIn) return <Redirect to='/' />;
  };

  console.log({ auth: props.auth });
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
      {redirectUser()}
      {renderError()}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signup })(Signup);
