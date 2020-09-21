const moment = require('moment');
const Orders = require('../models/orders');

/**
 * @function reducer
 * @description adds number values in array
 * @input array
 * @output integer
 */

const reducer = (arr) => arr.reduce((acc, currVal) => acc + currVal);

/**
 * @function salesPerDay
 * @description Fetches total sales per in a given day
 * @param {*} req startDate, endDate
 * @param {*} res total sales and total amount
 */

exports.salesPerDay = async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    const today = moment().startOf('day');
    const orders = await Orders.find({
      dateAdded: {
        $gte: today.toDate(),
        $lt: moment(today).endOf('day').toDate(),
      },
    });
    if (!orders || !orders.length)
      return res.status(400).json({ error: 'There are no sales today' });
    let totals = [];
    for (let o of orders) {
      totals.push(parseInt(o.products.orderTotal, 10));
    }

    const orderTotal = reducer(totals);

    res.send({ salesCount: orders.length, orderTotal, totals });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.salesPerPeriod = async (req, res) => {
  const { startDate, endDate } = res.body;
  try {
    const orders = await Orders.find({
      dateAdded: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    res.send(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
