const express = require('express');
const { createTestimonial } = require('../controllers/testimonials');

const router = express.Router();

/**
 * @route create testimonial
 * @access public
 */

router.post('/create', createTestimonial);

module.exports = router;
