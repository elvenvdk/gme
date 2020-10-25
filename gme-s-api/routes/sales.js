const express = require('express');
const { salesPerDay, salesPerPeriod } = require('../controllers/sales');

const router = express.Router();

/**
 * @route post api/sales
 * @query org, startDate, endDate
 * @description Fetches total sales per in a given day
 * @access private
 */

router.get('/', salesPerPeriod);

/**
 * @route post api/sales/sales-per-day
 * @query org, startDate, endDate
 * @description Fetches total sales per in a given day
 * @access private
 */

router.get('/sales-per-day', salesPerDay);

module.exports = router;
