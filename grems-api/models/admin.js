const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema(
  {
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
      required: true,
      trim: true,
      unique: 100,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'admin',
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  { timestatmps: true },
);

module.exports = mongoose.model('admin', AdminSchema);
