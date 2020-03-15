const express = require('express');
const Customer = require('../models/customer');

const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

router.get('/', tokenVerify, (req, res) => {
  res.send('Customer works!');
});

/**
 * @route post api/customer
 * @description create customer profile route
 * @access private
 */

router.post('/create-profile/:customerId', tokenVerify, async (req, res) => {
  try {
    const { customerId } = req.params;
    const cust = new Customer({ ...req.body });
    await cust.save();
    res.send({ msg: 'Profile succcessfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
