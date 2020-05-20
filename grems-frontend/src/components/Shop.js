import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../common/card/Card';
import Button from '../common/button/Button';
import CobblerJar from '../../assets/CustomLabel.jpg';
import { addItem, deleteCart } from '../helpers/carthelpers';
import { createCustomerOrder } from '../../api';

import './Shop.scss';

const Shop = () => {
  const defaultPrice = 5;
  const [data, setData] = useState({
    productName: "Grandma Emma's Peach Cobbler",
    addedToCart: false,
    showUpdateCart: false,
    products: [],
    price: defaultPrice,
    quantity: 1,
  });
  const [order, setOrder] = useState({});

  const addCartHandler = () => {
    setData({
      price: defaultPrice,
    });
    setData({
      ...data,
      addedToCart: true,
      price: defaultPrice * data.quantity,
    });
    addItem({
      name: data.productName,
      price: data.price,
      quantity: data.quantity,
    });
  };

  const handleAddToCheckout = () => {
    console.log('HELLO FROM CHECKOUT...');
    console.log({ q: data.quantity, p: data.price });
    setOrder({
      ...order,
      quantity: data.quantity,
      price: data.price,
      totalPrice: data.price,
    });

    createCustomerOrder(order)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteCartHandler = () => {
    setData({
      ...data,
      addedToCart: false,
      price: defaultPrice,
      quantity: 0,
      showUpdateCart: false,
    });
    deleteCart();
  };

  const inputChangeHandler = e => {
    console.log(e.target.value);
    console.log(data.quantity-- ? 'true' : 'false');
    setData({
      ...data,
      quantity: e.target.value,
      showUpdateCart: true,
    });
  };
  console.log({ quantity: data.quantity, price: data.price });
  console.log({ ShowOrder: order });
  return (
    <div className='shop'>
      <Card imgSrc={CobblerJar} title="Grandma Emma's Peach Cobbler Original">
        <div className='shop__buttons'>
          <form className='shop__buttons__amount'>
            <p>${data.price}.00</p>
            <label className='shop__buttons__amount-label' htmlFor='quantity'>
              Quantity
            </label>

            <input
              className='shop__buttons__amount-number'
              type='number'
              id='quantity'
              name='quantity'
              placeholder='1'
              value={data.quantity}
              onChange={e => inputChangeHandler(e)}
            />
          </form>
          <Button
            classname='shop__buttons__add-cart'
            clickhandler={addCartHandler}
          >
            {data.addedToCart && data.showUpdateCart
              ? 'Update cart'
              : 'Add to cart'}
          </Button>
          <Button
            classname={`shop__buttons__delete-cart${
              data.addedToCart ? '__show' : ''
            }`}
            clickhandler={deleteCartHandler}
          >
            Delete cart
          </Button>
          <Link
            className={`shop__buttons__checkout${
              data.addedToCart ? '__show' : ''
            }`}
            to='/checkout'
          >
            <Button>Check out</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Shop;
