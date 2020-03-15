const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      // required: true,
      trim: true,
    },
    last_name: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: 100,
    },
    password: {
      type: String,
      // required: true,
    },
    address_line1: {
      type: String,
      // required: true,
    },
    address_line2: {
      type: String,
    },
    city: {
      type: String,
      trim: true,
      // required: true,
    },
    state: {
      type: String,
      trim: true,
      // required: true,
      maxLength: 2,
    },
    zipCode: {
      type: Number,
      trim: true,
      // required: true,
      maxLength: 5,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Customer', CustomerSchema);
