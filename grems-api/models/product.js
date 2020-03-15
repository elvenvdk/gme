const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 100,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxLength: 32,
    },
    // category: {
    //   type: ObjectId,
    //   ref: 'category',
    //   required: true,
    //   trim: true,
    // },
    quantity: {
      type: Number,
      required: true,
      true: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    sale_type: {
      type: String,
      default: 'Online',
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', ProductSchema);
