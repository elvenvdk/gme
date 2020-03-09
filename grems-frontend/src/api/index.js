import axios from 'axios';

import { isAuthenticated } from '../auth';
const API = process.env.REACT_APP_GREMS_API || 'http://localhost:8000/api';

const setAuthToken = token => {
  if (token) axios.defaults.headers.common['x-auth-token'] = token;
  else delete axios.defaults.headers.common['x-auth-token'];
};

export const getBraintreeClientToken = (custId, token) => {
  setAuthToken(token);
  return axios
    .get(`${API}/braintree/get-token/${custId}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
};
