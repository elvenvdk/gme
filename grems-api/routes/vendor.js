const express = require('express');

const Product = require('../models/product');
const Vendor = require('../models/vendors');
const Orders = require('../models/orders');

const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

/**
 * @route post api/vendor/place-order
 * @description vendor place order
 * @access private
 */

router.post('/place-order', async (req, res) => {
  try {
    const newOrders = new Orders({ ...req.body });

    await newOrders.save();

    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route put api/vendor/cancel-order
 * @description vendor cencel order
 * @access private
 */

router.put('/cancel-order/orderNo', async (req, res) => {
  try {
    const { orderNo } = req.params;
    const order = await Orders.findOne({ _id: orderNo });
    if (!order) return res.send({ error: 'Order does not exist' });
    order.canceled = true;

    await order.save();
    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
