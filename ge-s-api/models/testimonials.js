const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const TestimonialSchema = new mongoose.Schema(
  {
    isCustomer: {
      type: Boolean,
    },
    customer: {
      type: ObjectId,
      ref: 'Customer',
      trim: true,
    },
    call: {
      type: Boolean,
    },
    eventDate: {
      type: Date,
    },
    eventType: {
      type: String,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    mobile: {
      type: Number,
      trim: true,
    },
    socialMedia: {
      facebook: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
    },
    testimony: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Testimonial', TestimonialSchema);
