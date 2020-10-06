const moment = require('moment');
const Orders = require('../models/orders');

/**
 * @function reducer
 * @description adds number values in array
 * @input array
 * @output integer
 */

const reducer = (arr) => arr.reduce((acc, currVal) => acc + currVal);

exports.salesPerPeriod = async (req, res) => {
  const { org, startDate, endDate } = req.query;
  const start = new Date(moment(startDate).startOf('day').format());
  const end = new Date(moment(endDate).endOf('day').format());

  try {
    const orders = await Orders.find({
      org,
      dateAdded: {
        $gte: start,
        $lt: end,
      },
    });

    if (!orders || !orders.length)
      return res
        .status(400)
        .json({ error: 'There are no sales for this period' });
    let totals = [];
    let salesData = [];
    for (let o of orders) {
      totals.push(parseInt(o.products.orderTotal, 10));
      salesData.push({ totals: o.products.orderTotal, date: o.dateAdded });
    }
    console.log(salesData);
    const orderTotal = reducer(totals);

    res.send({
      salesCount: orders.length,
      orderTotal,
      salesData,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

/**
 * @function salesPerDay
 * @description Fetches total sales per in a given day
 * @param {*} req startDate, endDate
 * @param {*} res total sales and total amount
 */

exports.salesPerDay = async (req, res) => {
  const { startDate, endDate, type, org } = req.body;

  let start = moment().startOf('day');
  try {
    const today = moment().startOf('day');
    const orders = await Orders.find({
      dateAdded: {
        $gte: today.toDate(),
        $lt: moment(today).endOf('day').toDate(),
      },
      type: type && type,
      org,
    });
    if (!orders || !orders.length)
      return res.status(400).json({ error: 'There are no sales today' });
    let totals = [];
    for (let o of orders) {
      totals.push(parseInt(o.products.orderTotal, 10));
    }

    const orderTotal = reducer(totals);

    res.send({ salesCount: orders.length, orderTotal });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
