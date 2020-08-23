const express = require('express');

const { tokenVerify } = require('../middleware/auth');
const {
  getBraintreeToken,
  braintreeSandboxV1,
} = require('../controllers/braintree');

const router = express.Router();

router.get('/get-token/:custId', getBraintreeToken);

router.post('/v1/sandbox', braintreeSandboxV1);

module.exports = router;
