const express = require('express');

const {
  register,
  login,
  vendorLogin,
  emailValidationToken,
  resendValidationEmail,
  vendorPasswordReset,
  vendorForgotPassword,
  vendorSignup,
} = require('../controllers/auth');

const router = express.Router();

/**
 * @route post api/customer
 * @description customer registration route
 * @access Public
 */

router.post('/register', register);

/**
 * @route post api/auth
 * @description Login Route- Authenticate customer and get token
 * @access Public
 */

router.post('/login', login);

/**
 * @route post api/auth/vendor-signup
 * @description Signup route for vendors - accessible on by admin
 * @access private
 */

router.post('/vendor-signup', vendorSignup);

/**
 * @route post api/auth/vendor-signin
 * @description Vendor signin
 * @access public
 */

router.post('/vendor-signin', vendorLogin);

/**
 * @route post api/auth/email-validation
 * @description validate email with token
 * @access private
 */

router.put('/email-validate/:validationToken', emailValidationToken);

/**
 * @route post api/auth/resend-email-validation
 * @description validate email with token
 * @access private
 */

router.put('/resend-email-validate/:email', resendValidationEmail);

/**
 * @route post api/auth/reset-password
 * @description reset password
 * @access private
 */

router.put('/vendor-password-reset', vendorPasswordReset);

/**
 * @route post api/auth/forgot-password
 * @description forgot password
 * @access public
 */

router.post('/vendor-forgot-password', vendorForgotPassword);

module.exports = router;
