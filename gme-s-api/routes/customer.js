const express = require('express');
const Customer = require('../models/customer');

const { tokenVerify, isAdmin } = require('../middleware/auth');
const {
  addCustomerInfo,
  addCustomerBillingAddress,
} = require('../controllers/customer');

const router = express.Router();

/**
 * @route post api/customer/add
 * @description add customer information
 * @access private
 */

router.post('/add', addCustomerInfo);

/**
 * @route post api/customer/billing-add
 * @description add customer billing address
 * @access private
 */

router.post('/billing-add', addCustomerBillingAddress);

/**
 * @route get api/customers?adminEmail
 * @description get customers
 * @access private
 */

router.get('/', tokenVerify, async (req, res) => {
  try {
    const customers = await Customer.find().select('-password');
    res.send(customers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route put api/edit-profile/:customerId
 * @description edit customer information profile route
 * @access private
 */

router.put('/edit-profile/:customerId', tokenVerify, async (req, res) => {
  try {
    const { customerId } = req.params;

    await Customer.updateOne({ _id: customerId }, { $set: { ...req.body } });
    res.send({ msg: 'Customer successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
