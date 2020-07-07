const express = require('express');

const { purchaseConfirmation } = require('../controllers/confirmations');

const router = express.Router();

// Customer purchase confirmation
router.post('/purchase-confirmation', purchaseConfirmation);

module.exports = router;
