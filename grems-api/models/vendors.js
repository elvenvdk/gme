const mongoose = require('mongoose');

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
    purchase_history: [
      {
        product: {
          type: ObjectId,
          ref: 'product',
        },
        quatity: {
          type: Number,
        },
        price: {
          type: Number,
        },
        total_paid: {
          type: Number,
        },
        purchase_date: {
          type: Date,
        },
      },
    ],
    validation_token: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date.now,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model('vendor', VendorSchema);
