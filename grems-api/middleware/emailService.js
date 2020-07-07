const axios = require('axios');

exports.signupConfirmation = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).json({
      msg: 'Signup confirmation could not be sent',
      error: error.message,
    });
  }
};
