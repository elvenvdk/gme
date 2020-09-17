const Orders = require('../models/orders');
const Product = require('../models/product');

exports.createOrder = async (req, res) => {
  try {
    const order = new Orders({ ...req.body });
    // const product = await Product.findOne({ _id: req.body.product });
    await order.save();
    // await product.update({ sold: product.sold + req.body.quantity });

    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};

exports.updateOrder = async (req, res) => {
  const { orderNo } = req.params;

  const updateFields = {
    quantity: req.body.quantity,
    cancelled: req.body.cancelled,
  };
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { ...updateFields } });
    res.send({ msg: 'Order successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.send(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.cancelOrder = async (req, res) => {
  const { orderNo } = req.params;
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { cancelled: true } });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};
