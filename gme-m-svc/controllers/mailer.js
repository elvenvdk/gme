const transport = require('../transport');

exports.sendMail = async (req, res) => {
  const { from, to, subject, text, html } = req.body;
  try {
    const confirmation = await transport.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });

    res.send({ msg: 'Message Sent...', msgId: confirmation.messageId });
  } catch (error) {
    console.log({error});
    res.status(400).json({ error: error.message });
  }
};
