const Testimonial = require('../models/testimonials');

exports.createTestimonial = async (req, res) => {
  const {
    customer,
    call,
    eventDate,
    eventType,
    firstName,
    lastName,
    email,
    mobile,
    facebook,
    instagram,
    twitter,
    testimony,
    emailResponse,
  } = req.body;
  try {
    const testimonial = await new Testimonial({
      customer,
      call,
      eventDate,
      eventType,
      firstName,
      lastName,
      email,
      mobile,
      'socialMedia.facebook': facebook,
      'socialMedia.instagram': instagram,
      'socialMedia.twitter': twitter,
      testimony,
      emailResponse,
    });
    await testimonial.save();
    res.send({ msg: 'Testimonial successfully saved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
