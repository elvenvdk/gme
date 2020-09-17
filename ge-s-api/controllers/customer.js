const Customer = require('../models/customer');
const CustomerBillingAddress = require('../models/customerBillingAddress');

/**
 * @function addCustomerInfo
 * @description add customer information to database
 * @return boolean/confirmation
 */

exports.addCustomerInfo = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    sameBilling,
  } = req.body;

  try {
    let customer = await new Customer({
      firstName,
      lastName,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      sameBilling,
    });
    await customer.save();
    res.send({ msg: 'Shipping address successfully added.' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'A customer with the same email exists already' });
  }
};

exports.addCustomerBillingAddress = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
  } = req.body;

  try {
    const customer = await Customer.findOne({ email });
    if (!customer)
      return res.status(404).json({ error: 'Customer email not found' });
    const customerBilling = await new CustomerBillingAddress({
      customerId: customer._id,
      firstName,
      lastName,
      email,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
    });
    await customerBilling.save();
    res.send({ msg: 'Billing address successfully added.' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'There was problem adding this billing address' });
  }
};
