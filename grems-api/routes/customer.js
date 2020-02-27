const express = require('express');
const formidable = require('formidable');
const Customer = require('../models/customer');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Customer works!');
});

/**
 * @route post api/customer
 * @description create customer profile route
 * @access private
 */

router.post('/profile', async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields) => {
      if (err) return res.status(400).json({ error: err.message });
    });
    const { firstName, lastName, streetAddress, city, state, zipCode } = fields;

    if (
      !firstName ||
      !lastName ||
      !streetAddress ||
      !city ||
      !state ||
      !zipCode
    ) {
      return res.status(400).json({ error: 'All fields' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
