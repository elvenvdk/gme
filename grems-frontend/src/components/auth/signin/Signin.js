import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../api';

Signin = () => {
  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });
  return <div className='signin'></div>;
};

export default Signin;
