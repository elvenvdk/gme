const express = require('express');
const formidable = require('formidable');
const Customer = require('../models/customer');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Customer works!');
});

module.exports = router;
