const axios = require('axios');

exports.sendMail = async ({ from, to, subject, text, html }) => {
  try {
    console.log({ from, to, subject, text, html });
    await axios.post(process.env.SEND_MAIL, { from, to, subject, text, html });
  } catch (error) {
    throw error;
  }
};
