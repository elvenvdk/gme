const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const braintree = require('braintree');

const Customer = require('../models/customer');

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
});

exports.getBraintreeToken = async (req, res) => {
  const { custId } = req.params;
  console.log({ custId });
  try {
    const customer = await Customer.findOne({ _id: custId });
    if (!customer) return res.send({ error: 'Customer not found' });
  } catch (err) {
    res.send(400).json({ error: err.message });
  }

  // connect to gateway
  gateway.clientToken.generate({}, (err, response) => {
    if (err) return res.status(500).json({ ERROR: err.message });

    res.send(response);
  });
};

exports.braintreeSandboxV1 = async (req, res) => {
  try {
    const { amount } = req.body;
    // Use the payment method nonce here
    const nonceFromTheClient = req.body.nonce;
    console.log({ nonceFromTheClient });
    // Create a new transaction for $10
    const newTransaction = await gateway.transaction.sale(
      {
        amount: amount,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          // This option requests the funds from the transaction once it has been
          // authorized successfully
          submitForSettlement: true,
        },
      },
      // (error, result) => {
      //   if (result) {
      //     res.send(result);
      //   } else {
      //     res.status(500).send(error);
      //   }
      // },
    );
    if (newTransaction.success) {
      console.log({ TRANSACTION_ID: newTransaction.transaction.id });
      return res.send(newTransaction.transaction.id);
    } else {
      console.log(newTransaction.message);
      return res.send({ error: newTransaction.message });
    }
  } catch (err) {
    // Deal with an error
    console.log(err);
    res.send(err);
  }
};
