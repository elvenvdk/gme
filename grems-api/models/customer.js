const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
      trim: true,
    },
    lastName: {
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
    addressLine1: {
      type: String,
      // required: true,
    },
    addressLine2: {
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
