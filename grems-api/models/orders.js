const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const OrdersSchema = mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: 'Product',
    },
    vendor_id: {
      type: ObjectId,
      ref: 'Vendor',
    },
    customer_id: {
      type: ObjectId,
      ref: 'Customer',
    },
    quantity: {
      type: Number,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    total_price: {
      type: Number,
      trim: true,
    },
    canceled: {
      type: Boolean,
      default: false,
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true },
);

module.exports = mongoose.model('Orders', OrdersSchema);
