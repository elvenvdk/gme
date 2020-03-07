const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const braintree = require('braintree');

const Customer = require('../models/customer');
const { tokenVerify } = require('../middleware/auth');

const router = express.Router();

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
});

router.get('/get-token/:custId', tokenVerify, async (req, res) => {
  const { custId } = req.params;
  console.log(custId);
  const customer = await Customer.findOne({ _id: custId });
  if (!customer) return res.send({ error: 'Customer not found' });
  try {
  } catch (err) {
    res.send(400).json({ error: err.message });
  }

  // connect to gateway
  gateway.clientToken.generate({}, (err, response) => {
    if (err) return res.status(500).send(err.message);

    res.send(response);
  });
});

module.exports = router;
