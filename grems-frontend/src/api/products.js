import axios from 'axios';
import { setGlobal } from 'reactn';
const API = process.env.REACT_APP_GREMS_API;

// get product
const getProduct = async (productId) => {
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
const getProducts = async () => {
  try {
    const products = await axios.get(`${API}/products`);
    console.log({ products: products.data });
    return products.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

// get image for product
const getProductImage = async (productId) => {
  console({ id_from_api: productId });
  try {
    const product = await axios.get(`${API}/products/photo/${productId}`);
    return product.data;
  } catch (error) {
    return error;
  }
};

export default {
  getProduct,
  getProducts,
  getProductImage,
};
