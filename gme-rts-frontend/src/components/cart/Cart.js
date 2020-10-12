import React from 'react';
import { useGlobal } from 'reactn';

const Cart = () => {
  const [order] = useGlobal('order');

  console.log(order);
  return <div>Cart...</div>;
};

export default Cart;
