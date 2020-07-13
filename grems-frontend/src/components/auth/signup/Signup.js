import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import SignupForm from '../../common/signinForm/signinForm';
import api from '../../../api';

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });
  return (
    <div className='signin'>
      <h1 className='signin-title'>My Account</h1>
      <div className='signin-container'>
        <SignupForm isSignup={true} />
      </div>
    </div>
  );
};

export default Signin;
