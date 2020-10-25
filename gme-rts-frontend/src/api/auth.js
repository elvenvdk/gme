import axios from 'axios';

const API = process.env.REACT_APP_GREMS_API || 'http://localhost:8000/api';

// customer registration

const register = async (email, password) => {
  try {
    const res = await axios.post(`${API}/auth/register`, { email, password });
    if (!res.data.error)
      authenticate(res.data, () => console.log('User authenticated...'));
    return res.data;
  } catch (error) {
    console.log(error);
    console.log(error.response.data);
  }
};

// customer signin
const signin = (email, password) => {
  return axios
    .post(`${API}/auth/login`, { email, password })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

// authenticate
const authenticate = (data, fn) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    fn();
  }
};

// check authentication
const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return JSON.parse(localStorage.getItem('jwt'));
};

// customer signout
const signout = (fn) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    if (localStorage.getItem('cart')) localStorage.removeItem('cart');
    fn();
  }
};

export default {
  signin,
  authenticate,
  isAuthenticated,
  signout,
  register,
};
