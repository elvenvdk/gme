import axios from 'axios';

const API = process.env.REACT_APP_GREMS_API;

// get product
export const getProduct = async () => {
  const productId = '5e76f667bb01c35b25d229be';
  return axios
    .get(`${API}/products/${productId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

// get all products
export const getProducts = async () => {
  try {
    const products = await axios.get(`${API}/products`);
    return products.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
