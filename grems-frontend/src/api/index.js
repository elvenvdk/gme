import axios from 'axios';

import { isAuthenticated } from '../auth';
// const { token, id } = isAuthenticated();
// const token = isAuthenticated().token;
// const id = isAuthenticated().id;
const API = process.env.REACT_APP_GREMS_API || 'http://localhost:8000/api';

// set header x-auth-token
const setAuthToken = token => {
  if (token) axios.defaults.headers.common['x-auth-token'] = token;
  else delete axios.defaults.headers.common['x-auth-token'];
};

// get product
export const getProduct = () => {
  const productId = '5e76f667bb01c35b25d229be';
  return axios
    .get(`${API}/product/${productId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
};

// create order
export const createCustomerOrder = order => {
  setAuthToken(isAuthenticated().token);
  console.log({ APIOrder: order });
  order.product = '5e76f667bb01c35b25d229be';
  order.customerId = isAuthenticated().id;
  console.log({ APIOrder: order });
  return axios
    .post(`${API}/orders/create`, order)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
};
