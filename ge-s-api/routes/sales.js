const express = require('express');
const { salesPerDay } = require('../controllers/sales');

const router = express.Router();

/**
 * @route post api/sales/sales-per-day
 * @description Fetches total sales per in a given day
 * @access private
 */

router.get('/sales-per-day', salesPerDay);

module.exports = router;
