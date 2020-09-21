const express = require('express');

const { tokenVerify } = require('../middleware/auth');
const {
  getBraintreeToken,
  braintreeSandboxV1,
} = require('../controllers/braintree');

const router = express.Router();

// Get Braintree Token

router.get('/get-token/:custId', getBraintreeToken);

// Get Braintree Token
// router.get('/get-token/', getBraintreeToken);

// Send token and payment to Braintree Sandbox
router.post('/v1/sandbox', braintreeSandboxV1);

module.exports = router;
