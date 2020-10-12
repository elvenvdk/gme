const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const VendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    primaryEmail: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    secondaryEmail: {
      type: String,
      trim: true,
    },
    addressLine1: {
      type: String,
      required: true,
      trim: true,
    },
    addressLine2: {
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
    primaryPhone: {
      type: Number,
      trim: true,
    },
    validationToken: {
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
