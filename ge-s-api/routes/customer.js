const express = require('express');
const Customer = require('../models/customer');

const { tokenVerify, isAdmin } = require('../middleware/auth');

const router = express.Router();

/**
 * @route get api/profile/:customerId
 * @description get customer profile route
 * @access private
 */

router.get('/profile/:customerId', tokenVerify, async (req, res) => {
  const { customerId } = req.params;
  try {
    const customer = await Customer.findOne({ _id: customerId }).select(
      '-password',
    );
    res.send(customer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route get api/customers?adminEmail
 * @description get customers
 * @access private
 */

router.get('/', tokenVerify, async (req, res) => {
  console.log({ AdminEmail: req.query.adminEmail });
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
  console.log('Edit Profile Hit...');
  try {
    const { customerId } = req.params;

    await Customer.updateOne({ _id: customerId }, { $set: { ...req.body } });
    res.send({ msg: 'Customer successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
