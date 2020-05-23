import axios from 'axios';

const API = process.env.REACT_APP_GREMS_API || 'http://localhost:8000/api';

// customer signup
export const signup = (email, password) => {
  console.log({ API });
  return axios
    .post(`${API}/auth/signup`, { email, password })
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(err => {
      throw err;
    });
};

// customer signin
export const signin = (email, password) => {
  return axios
    .post(`${API}/auth/signin`, { email, password })
    .then(res => {
      return res;
    })
    .catch(err => {
      throw err;
    });
};

// authenticate
export const authenticate = (data, fn) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    fn();
  }
};

// check authentication
export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return JSON.parse(localStorage.getItem('jwt'));
};

// customer signout
export const signout = fn => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    if (localStorage.getItem('cart')) localStorage.removeItem('cart');
    fn();
  }
};
