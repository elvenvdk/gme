const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.GREMS_HOST,
  port: process.env.SSL_PORT,
  secure: true,
  auth: {
    user: process.env.GEMS_USER,
    pass: process.env.GREMS_PASSWORD,
  },
});

module.exports = transport;
