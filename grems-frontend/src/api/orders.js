import axios from 'axios';

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

export default { createCustomerOrder };
