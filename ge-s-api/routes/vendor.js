const express = require('express');

const Product = require('../models/product');
const Vendor = require('../models/vendors');
const Orders = require('../models/orders');

const { tokenVerify, isAdmin } = require('../middleware/auth');

const router = express.Router();

/**
 * @route get api/vendor
 * @description get vendors
 * @access private admin
 */

router.get('/', tokenVerify, async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.send(vendors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route put api/vendor/update/:vendorNo
 * @description update vendor
 * @access private
 */

router.put('/update/:vendorNo', tokenVerify, async (req, res) => {
  const { vendorNo } = req.params;
  const {
    primaryEmail,
    secondaryEmail,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    primaryPhone,
  } = req.body;
  const fields = {
    primaryEmail,
    secondaryEmail,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    primaryPhone,
  };
  try {
    await Vendor.updateOne({ _id: vendorNo }, { $set: { fields } });
    res.send({ msg: 'Vendor successfully updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
