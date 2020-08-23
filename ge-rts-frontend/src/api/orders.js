import axios from 'axios';
import { setGlobal, getGlobal } from 'reactn';

const API = process.env.api;
// create order
const createCustomerOrder = (order) => {
  console.log({ APIOrder: order });
  order.product = '5e76f667bb01c35b25d229be';
  console.log({ APIOrder: order });
  return axios
    .post(`${API}/orders/create`, order)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

const addToCart = (order) => {
  setGlobal({ order });
};

const getOrder = () => {
  const { order } = getGlobal();
  return order;
};

export default { createCustomerOrder, addToCart, getOrder };
