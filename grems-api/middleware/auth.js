const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

exports.tokenVerify = (req, res, next) => {
  // Get token form header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token)
    return res.status(401).json({ error: 'No token, authentication denied' });

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (req.customer) req.customer = decoded.customer;
    else if (req.admin) req.admin = decoded.admin;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ error: 'Token is not valid', error_msg: error.message });
  }
};

exports.isAdmin = async (req, res, next) => {
  const { email } = req.body;
  try {
    const admin = Admin.findOne({ email });
    if (!admin.role)
      return res.send({ error: 'You do not have authorization' });
    if (admin.role !== 'admin')
      return res.send({ error: 'You do not have authorization' });
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.isAdminLevelOne = async (req, res, next) => {
  const { email } = req.body;
  try {
    const admin = Admin.findOne({ email });
    if (admin.level !== 1)
      return res.send({ error: 'You do not have authorization' });
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
