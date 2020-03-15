const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const VendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    primary_email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    secondary_email: {
      type: String,
      trim: true,
    },
    address_line1: {
      type: String,
      required: true,
      trim: true,
    },
    address_line2: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      true: true,
    },
    zip: {
      type: Number,
      required: true,
      trim: true,
    },
    primary_phone: {
      type: Number,
      trim: true,
    },
    validation_token: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model('vendor', VendorSchema);
