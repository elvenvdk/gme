const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');
const Customer = require('../models/customer');

const router = express.Router();

const errorValidation = [
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters',
  ).isLength({ min: 6 }),
];

router.get('/', (req, res) => {
  res.send('Auth works!');
});

/**
 * @route post api/customer
 * @description customer registration route
 * @access Public
 */

router.post('/customer-registration', errorValidation, async (req, res) => {
  const errors = validationResult(req);
  if (errors) return res.status(400).json({ error: errors.array() });
  try {
    const { email, password } = req.body;
    let customer = await Customer.findOne({ email });
    if (customer)
      return res.status(400).json({ error: 'Customer already exists' });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);

    customer = new Customer({
      email,
      hashedPassword,
    });

    await customer.save();

    // payload for session token
    const payload = {
      customer: {
        id: customer._id,
      },
    };
    // issue session token upon registration
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, id: payload.customer.id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route post api/auth
 * @description Login Route- Authenticate customer and get token
 * @access Public
 */

router.post('/customer-login', errorValidation, async (req, res) => {
  const errors = validationResult(req);
  if (errors) return res.status(400).json({ error: errors.array() });
  try {
    const { email, password } = req.body;
    let customer = await Customer.findOne({ email });
    if (!customer)
      return res.status(400).json({ error: 'Invalid credentials...' });

    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Invalid credentials...' });

    const payload = {
      customer: {
        id: customer._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, id: customer._id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
