const express = require('express');
const { createSurvey } = require('../controllers/surveys');

const router = express.Router();

/**
 * @route create testimonial
 * @access public
 */

router.post('/create', createSurvey);

module.exports = router;
