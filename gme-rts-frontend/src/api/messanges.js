const axios = require('axios');

export const contactUs = async ({ from, to, subject, text, html }) => {
  try {
    await axios.post('http://localhost:8002/grems-mailer/send', {
      from,
      to,
      subject,
      text,
      html,
    });
  } catch (error) {
    return error.response.data;
  }
};


export default {
  contactUs
};