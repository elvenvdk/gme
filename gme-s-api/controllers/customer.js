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
    let customer = await Customer.findOne({ email });
    if (customer) {
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.email = email;
      customer.addressLine1 = addressLine1;
      customer.addressLine2 !== '' ? addressLine2 : null;
      customer.city = city;
      customer.state = state;
      customer.zipCode = zipCode;
      customer.sameBilling = sameBilling;

      await customer.save();
      return res.send({
        msg: 'Shipping address successfully added.',
        custId: customer._id,
      });
    }

    customer = await new Customer({
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
    res.send({
      msg: 'Shipping address successfully added.',
      custId: customer._id,
    });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'A customer with the same email exists already' });
  }
};

exports.getCustIdFromDb = async (id) => {
  try {
    const id = await Customer.findById(id);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.addCustomerBillingAddress = async (req, res) => {
  const { customerId } = req.query;
  const {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
  } = req.body;

  try {
    const customer = await Customer.findOne({ _id: customerId });

    if (!customer) return res.status(404).json({ error: 'Customer not found' });

    let customerBilling = await CustomerBillingAddress.findOne({ customerId });
    if (!customerBilling) {
      customerBilling = await new CustomerBillingAddress({
        customerId: customer._id,
        firstName,
        lastName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
      });
      await customerBilling.save();
    }

    customerBilling._id = customerId;
    customerBilling.firstName = firstName;
    customerBilling.lastName = lastName;
    customerBilling.addressLine1 = addressLine1;
    customerBilling.addressLine2 =
      addressLine2 !== '' ? customerBilling.addressLine2 : null;
    customerBilling.city = city;
    customerBilling.state = state;
    customerBilling.zipCode = zipCode;

    res.send({ msg: 'Billing address successfully added.' });
  } catch (error) {
    res
      .status(404)
      .json({ error: 'There was problem adding this billing address' });
  }
};
