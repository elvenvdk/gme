const express = require('express');
const { tokenVerify } = require('../middleware/auth');
const {
  getProduct,
  getProducts,
  getProductImage,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/products');

const router = express.Router();

/**
 * @route get api/product
 * @description get products route
 * @access public
 */

router.get('/', getProducts);

/**
 * @route get api/product/:productId
 * @description get single product route
 * @access public
 */

router.get('/:productId', getProduct);

router.get('/photo/:productId', getProductImage);

/**
 * @route post api/product
 * @description product create route
 * @access Private
 */

router.post('/', createProduct);

/**
 * @route put api/product
 * @description product update route
 * @access Private
 */

/**
 * @route delete api/product
 * @description product create route
 * @access Private
 */

router.delete('/:productId', deleteProduct);

/**
 * @route update api/product/sold
 * @description update product sold route
 * @access private
 */

router.put('/:productId', updateProduct);

module.exports = router;
