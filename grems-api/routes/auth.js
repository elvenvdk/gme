const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');
const Customer = require('../models/customer');
const Admin = require('../models/admin');

const router = express.Router();

// const errorValidation = [
//   check('email', 'Please include a valid email').isEmail(),
//   check(
//     'password',
//     'Please enter a password with 6 or more characters',
//   ).isLength({ min: 6 }),
// ];

const validateEmail = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  return false;
};

router.get('/', (req, res) => {
  res.send('Auth works!');
});

/**
 * @route post api/customer
 * @description customer registration route
 * @access Public
 */

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '')
    return res.send({ error: 'Email and password are required' });
  if (email === '') return res.send({ error: 'Email is required' });
  if (!validateEmail(email))
    return res.send({ error: 'A valid email address is required' });
  if (password === '') return res.send({ error: 'Password is required' });
  try {
    const { email, password } = req.body;
    let customer = await Customer.findOne({ email });
    if (customer) return res.send({ error: 'Customer already exists' });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);

    customer = new Customer({
      email,
      password: hashedPassword,
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
 * @route post api/admin
 * @description customer registration route
 * @access Public
 */

router.post('/admin/signup', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '')
    return res.send({ error: 'Email and password are required' });
  if (email === '') return res.send({ error: 'Email is required' });
  if (!validateEmail(email))
    return res.send({ error: 'A valid email address is required' });
  if (password === '') return res.send({ error: 'Password is required' });
  try {
    const { email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) return res.send({ error: 'Personel already exists' });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);

    admin = new Admin({
      email,
      password: hashedPassword,
    });

    await admin.save();

    // payload for session token
    const payload = {
      admin: {
        id: admin._id,
      },
    };
    // issue session token upon registration
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, id: payload.admin.id });
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

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '')
    return res.send({ error: 'Email and password are required' });
  if (email === '') return res.send({ error: 'Email is required' });
  if (!validateEmail(email))
    return res.send({ error: 'A valid email address is required' });
  if (password === '') return res.send({ error: 'Password is required' });
  try {
    let customer = await Customer.findOne({ email });
    if (!customer) return res.send({ error: 'Invalid credentials...' });
    console.log({ another_customer: customer.password });
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
        console.log({ token, id: customer._id });
        if (err) throw err;
        res.json({ token, id: customer._id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route post api/auth
 * @description Login Route- Authenticate admin and get token
 * @access Public
 */

router.post('/admin/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email === '' || password === '')
    return res.send({ error: 'Email and password are required' });
  if (email === '') return res.send({ error: 'Email is required' });
  if (!validateEmail(email))
    return res.send({ error: 'A valid email address is required' });
  if (password === '') return res.send({ error: 'Password is required' });
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) return res.send({ error: 'Invalid credentials...' });
    if (admin.role !== 'admin')
      return res.send({ error: 'Invalid credentials...' });
    console.log({ another_admin: admin.password });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ error: 'Invalid credentials...' });

    const payload = {
      admin: {
        id: admin._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 36000 },
      (err, token) => {
        console.log({ token, id: admin._id });
        if (err) throw err;
        res.json({ token, id: admin._id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
