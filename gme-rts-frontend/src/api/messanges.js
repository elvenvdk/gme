const axios = require('axios');

export const contactUs = async ({ from, to, subject, text, html }) => {
  try {
    const res = await axios.post('http://localhost:8002/grems-mailer/send', {
      from,
      to,
      subject,
      text,
      html,
    });
    return res.data.msg;
  } catch (error) {
    return error.response.data;
  }
};


export default {
  contactUs
};