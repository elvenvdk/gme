const express = require('express');

const Orders = require('../models/orders');
const { tokenVerify, isAdmin } = require('../middleware/auth');

const router = express.Router();

/**
 * @route post api/orders/create
 * @description vendors/customers create order
 * @access private
 */

router.post('/create', tokenVerify, async (req, res) => {
  try {
    const order = new Orders({ ...req.body });
    console.log({ order });
    await order.save();
    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
});

/**
 * @route put api/orders/edit
 * @description vendors/customers edit order
 * @access private
 */

router.put('/update/:orderNo', tokenVerify, async (req, res) => {
  const { orderNo } = req.params;

  const updateFields = {
    quantity: req.body.quantity,
    cancelled: req.body.cancelled,
  };
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { ...updateFields } });
    res.send({ msg: 'Order successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
});

/**
 * @route get api/orders
 * @description admin get orders
 * @access private admin
 */

router.get('/', tokenVerify, async (req, res) => {
  try {
    const orders = await Orders.find();
    res.send(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route put api/orders/cancel/:orderNo
 * @description vendors/customers cancel order
 * @access private
 */

router.put('/cancel/:orderNo', tokenVerify, async (req, res) => {
  const { orderNo } = req.params;
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { cancelled: true } });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
});

module.exports = router;
