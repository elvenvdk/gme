import React, { useState, useEffect } from 'react';
import Card from '../common/card/Card';
import { getBraintreeClientToken } from '../../api';
import DropIn from 'braintree-web-drop-in-react';
import 'braintree-web';
import { isAuthenticated } from '../../auth';
import { addItem } from '../helpers/carthelpers';

const Checkout = ({ price }) => {
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: '',
  });

  const { id, token } = isAuthenticated() && isAuthenticated();

  useEffect(() => {
    getBraintreeClientToken(id, token)
      .then(data => {
        setData({
          ...data,
          clientToken: data.clientToken,
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  console.log({ price });
  return <div>Checkout...</div>;
};

export default Checkout;
