const { sendMail } = require('./emailService');

exports.contactUs = async (req, res) => {
  const { to, from, subject, text, html } = req.body;

  try {
    await sendMail({ to, from, subject, text, html });
    res.send({ msg: 'Message successfully sent' });
  } catch (error) {
    console.log({ error });
    res.status(500).json({ error: error.message });
  }
};
