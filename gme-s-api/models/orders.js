const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const OrdersSchema = mongoose.Schema(
  {
    orderType: {
      type: String,
    },
    org: {
      ref: 'Org',
      type: ObjectId,
      $db: 'grems-non-profit',
    },
    orgSalesPersonRundRaising: {
      ref: 'Users',
      type: ObjectId,
      $db: 'grems-non-profit',
    },
    products: {
      type: {},
    },
    vendorId: {
      type: ObjectId,
      ref: 'Vendor',
    },
    customerId: {
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
    totalPrice: {
      type: Number,
      trim: true,
    },
    cancelled: {
      type: Boolean,
      default: false,
    },
    purchased: {
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
