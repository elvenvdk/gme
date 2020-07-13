const express = require('express');

const { tokenVerify } = require('../middleware/auth');
const {
  createOrder,
  updateOrder,
  getOrders,
  cancelOrder,
} = require('../controllers/orders');

const router = express.Router();

/**
 * @route post api/orders/create
 * @description vendors/customers create order
 * @access private
 */

router.post('/create', tokenVerify, createOrder);

/**
 * @route put api/orders/edit
 * @description vendors/customers edit order
 * @access private
 */

router.put('/update/:orderNo', tokenVerify, updateOrder);

/**
 * @route get api/orders
 * @description admin get orders
 * @access private admin
 */

router.get('/', tokenVerify, getOrders);

/**
 * @route put api/orders/cancel/:orderNo
 * @description vendors/customers cancel order
 * @access private
 */

router.put('/cancel/:orderNo', tokenVerify, cancelOrder);

module.exports = router;
