const Orders = require('../models/orders');
const Product = require('../models/product');

/**
 * @function createOrder
 * @description Creates a sales order
 * @param {*} req order, custId, orderType
 * @param {*} res confirmation msg
 */

exports.createOrder = async (req, res) => {
  try {
    const { order, custId, orderType } = req.body;
    const orders = new Orders({
      orderType,
      products: order,
      customerId: custId,
    });
    // const product = await Product.findOne({ _id: req.body.product });
    await orders.save();
    // await product.update({ sold: product.sold + req.body.quantity });

    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};

/**
 * @function createOrderFromSalesPerson
 * @description Creates a sales order
 * @param {*} req order, custId, orderType
 * @param {*} res confirmation msg
 */

exports.createOrderFromSalesPerson = async (req, res) => {
  const { org, orgSalesPerson } = req.query;
  try {
    const { order, customerId, orderType } = req.body;

    const orders = new Orders({
      orderType,
      products: order,
      customerId,
      org,
      orgSalesPerson,
    });
    // const product = await Product.findOne({ _id: req.body.product });
    await orders.save();
    // await product.update({ sold: product.sold + req.body.quantity });

    res.send({ msg: 'Order successfully saved' });
  } catch (err) {
    res.status(400).json({ error: 'There was a problem saving this order...' });
  }
};

/**
 * @function updateOrder
 * @description Updates a sales order
 * @param {*} query orderNo
 * @param {*} req quantity, cancelled, purchased
 * @param {*} res confirmation msg
 */

exports.updateOrder = async (req, res) => {
  const { orderNo } = req.query;

  const updateFields = {
    quantity: req.body.quantity,
    cancelled: req.body.cancelled,
    purchased: req.body.purchased,
  };
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { ...updateFields } });
    res.send({ msg: 'Order successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};

/**
 * @function getOrders
 * @description Fetches all sales orders
 * @param {*} res Array of order objects
 */

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.send(orders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * @function cancelOrder
 * @description Cancels a sales order
 * @param {*} query orderNo
 * @param {*} req quantity, cancelled, purchased
 * @param {*} res confirmation msg
 */

exports.cancelOrder = async (req, res) => {
  const { orderNo } = req.query;
  try {
    await Orders.updateOne({ _id: orderNo }, { $set: { cancelled: true } });
  } catch (err) {
    res.status(400).json({ error: err.messgage });
  }
};
