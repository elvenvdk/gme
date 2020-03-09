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

router.post('/v1/sandbox', async (req, res) => {
  try {
    // Use the payment method nonce here
    const nonceFromTheClient = req.body.paymentMethodNonce;
    // Create a new transaction for $10
    const newTransaction = gateway.transaction.sale(
      {
        amount: '5.00',
        paymentMethodNonce: nonceFromTheClient,
        options: {
          // This option requests the funds from the transaction once it has been
          // authorized successfully
          submitForSettlement: true,
        },
      },
      (error, result) => {
        if (result) {
          res.send(result);
        } else {
          res.status(500).send(error);
        }
      },
    );
  } catch (err) {
    // Deal with an error
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
