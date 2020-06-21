import axios from 'axios';

const API = process.env.API;

// get product
export const getProduct = () => {
  const productId = '5e76f667bb01c35b25d229be';
  return axios
    .get(`${API}/product/${productId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
