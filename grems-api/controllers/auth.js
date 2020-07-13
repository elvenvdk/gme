const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const { sendMail } = require('./emailService');

const Customer = require('../models/customer');
const Admin = require('../models/admin');
const Vendor = require('../models/vendors');

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  return false;
};

exports.register = async (req, res) => {
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
        sendMail({
          from: 'test@testmail.com',
          to: email,
          subject: 'This is a test from grems backend...',
          text: 'Test TExt...',
          html:
            '<div>This is test text from Grems API.  If you are recieving this.  Then you are doing very good my friend</div>',
        });
        res.json({ token, id: payload.customer.id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
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
        // console.log({ token, id: customer._id });
        if (err) throw err;
        res.json({ token, id: customer._id });
      },
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.vendorLogin = async (req, res) => {
  try {
    // field requirement check
    const { primary_email, password } = req.body;
    if (!primary_email) return res.send({ error: 'Email is required' });
    if (!password) return res.send({ error: 'Password is required' });

    // check if vendor exists
    const vendor = await Vendor.findOne({ primary_email });
    if (!vendor) return res.send({ error: 'Vendor credentials invalid' });
    if (!vendor.active)
      return res.send({ error: 'Vendor credentials invalid' });
    if (vendor.validation_token !== '')
      return res.send({ error: 'You have not validated your email address.' });

    // compare passwords
    const valid = bcrypt.compare(password, vendor.password);
    if (!valid) return res.status(400).json({ error: 'credentials invalid' });

    // issue token
    const payload = {
      vendor: {
        id: vendor._id,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    return res.json({ token, id: vendor._id, primary_email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.emailValidationToken = async (req, res) => {
  try {
    const { validationToken } = req.params;

    // check if vendor/token exists
    const vendor = await Vendor.findOne({ validation_token: validationToken });
    if (!vendor) return res.send({ error: 'Token not valid' });

    // compare tokens
    if (validationToken !== vendor.validation_token)
      return res.send({ error: 'Token not valid' });

    // decode email confirmation token
    const decoded = jwt.decode(validationToken, process.env.JWT_SECRET);
    if (!decoded) return res.send({ error: 'Token not valid' });

    // remove validation_token from vendor - set active to true
    vendor.validation_token = '';
    vendor.active = true;

    // save vendor
    await vendor.save();
    res.send({
      msg:
        'Email successfully validated.  Please reset your password and log in',
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.resendValidationEmail = async (req, res) => {
  try {
    const { email } = req.params;

    // check if vendor/token exists
    const vendor = await Vendor.find({ primary_email: email });
    console.log({ vendor });
    if (!vendor) return res.send({ error: 'Credentials invalid' });

    // create new token for email
    const payload = { id: vendor._id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    // add token to vendors validation_token
    vendor.validation_token = token;
    console.log({ newToken: token });
    console.log({ ValidationToken: vendor.validation_token });
    await vendor.save();

    // send vendor confirmation email
    const link = `http://localhost:3000/email-verification/${token}`;
    res.json({
      email: {
        from: 'Do-Not-Reply',
        to: req.body.email,
        subject: "Grandma Emma's Vendor Email Verification",
        body: `Dear Vendor,
                 You have a new email verification for Grandma Emma\'s.
                 Please click on the link below
                 to verify your email. Once verified you can log in. 
                 Link: ${link}`,
      },
      msg:
        'Sign up successful.  Please check your email for the confirmation link.',
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.vendorPasswordReset = async (req, res) => {
  try {
    // const { id } = req.params;
    const { email, newPassword, confirmNewPassword } = req.body;
    if (!email)
      return res.send({ error: 'You must enter your primary email address' });
    if (!newPassword)
      return res.send({ error: 'You must include your new password' });
    if (!confirmNewPassword)
      return res.send({ error: 'Please confirm your password' });
    if (newPassword !== confirmNewPassword)
      return res.send({ error: 'Passwords do not match.  Please try again' });

    // check if email exists;
    const vendor = await Vendor.findOne({ primary_email: email });
    if (!vendor) return res.send({ error: 'Credentials not valid' });
    if (email !== vendor.primary_email)
      return res.send({ error: 'Credentials not valid' });

    // salt and hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);
    vendor.password = hashedNewPassword;

    // save vendor
    await vendor.save();
    res.send({ msg: 'Password successfully reset' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.vendorForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log({ email });
    // check if vendor exists
    if (!email) return res.send({ error: 'Email is required' });
    const vendor = await Vendor.findOne({ primary_email: email });
    console.log({ vendor });
    if (!vendor) return res.send({ error: 'Credentials invalid' });

    // create new token for email
    const payload = { id: vendor._id };
    console.log({ VendorId: vendor._id });
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

    // add token to vendors validation_token
    vendor.validation_token = token;
    await vendor.save();

    // send vendor confirmation email
    const link = `http://localhost:3000/email-verification/${token}`;
    res.json({
      email: {
        from: 'Do-Not-Reply',
        to: req.body.email,
        subject: "Grandma Emma's Vendor Email Verification",
        body: `Dear Vendor,
                You have reset your password at Grandma Emma\'s.
                Please click on the link below
                to verify your email. Once verified you can log in. 
                Link: ${link}`,
      },
      msg:
        'Sign up successful.  Please check your email for the confirmation link.',
    });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.vendorSignup = async (req, res) => {
  try {
    // check field requirements
    if (!req.body.name) return res.send({ error: 'Vendor name is required' });
    if (!req.body.primary_email)
      return res.send({ error: 'Vendor primary email is require' });
    // if (!req.body.password) return res.send({ error: 'Password is required' });
    if (!req.body.address_line1)
      return res.send({ error: 'Vendor address is required' });
    if (!req.body.city) return res.send({ error: 'City is required' });
    if (!req.body.state) return res.send({ error: 'State is required' });
    if (!req.body.zip) return res.send({ error: 'Zip code is required' });

    // check if vendor exists
    let vendor = await Vendor.findOne({
      primary_email: req.body.primary_email,
    });
    console.log({ primaryEmail: req.body.primary_email });
    if (vendor)
      return res.send({ error: 'This email is currently registered' });

    // set password
    const setPassword = uuidv4();

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(setPassword, salt);
    req.body.password = hashedPassword;
    console.log({ reqBody: req.body });

    // create vendor
    vendor = new Vendor({
      ...req.body,
    });
    await vendor.save();

    // create token for email confirmation
    vendor = await Vendor.findOne({ primary_email: req.body.primary_email });

    const id = vendor._id;
    const payload = { id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });
    // update vendors validation_token with token
    vendor.validation_token = token;
    await vendor.save();
    console.log({ NewVendor: vendor });

    // send vendor confirmation email
    const link = `http://localhost:3000/email-verification/${token}`;
    res.json({
      email: {
        from: 'Do-Not-Reply',
        to: req.body.email,
        subject: "Grandma Emma's Vendor Email Verification",
        body: `You have signed up as a Grandma Emma\s vendor! 
                Please click on the link below
                to verify your email. Once verified you can log in. 
                Link: ${link}`,
      },
      msg:
        'Sign up successful.  Please check your email for the confirmation link.',
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
