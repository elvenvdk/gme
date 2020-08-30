const Testimonial = require('../models/testimonials');

exports.createTestimonial = async (req, res) => {
  const {
    isCustomer,
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
  } = req.body;
  try {
    const testimonial = await new Testimonial({
      isCustomer,
      customer,
      call,
      eventDate,
      eventType,
      firstName,
      lastName,
      email,
      mobile,
      'socialMedia.facebook': facebook,
      'socialMedia.instragram': instagram,
      'socialMedia.twitter': twitter,
      testimony,
    });
    await testimonial.save();
    res.send({ msg: 'Testimonial successfully saved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
