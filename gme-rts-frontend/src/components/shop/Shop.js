import React from 'react';

import ProductList from './productList/ProductList';
import OrderSection from '../orderSection/OrderSection';

import './Shop.scss';

const Shop = () => (
  <div className='shop'>
    <h1 className='shop-header'>Shop</h1>
    <p className='shop-headertext'>
      Looking for a unque gift for your customers, potential customers, or
      employees? We have the perfect solution for you. Our Fresh baked cobblers
      will make a lasting iimpression.
    </p>
    {ProductList()}
    <OrderSection />
  </div>
);

export default Shop;
