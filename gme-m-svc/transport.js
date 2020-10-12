const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.GOOGLE_HOST,
  port: process.env.SSL_PORT,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

module.exports = transport;
