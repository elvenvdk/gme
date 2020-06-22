import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import cobblerjarImg from '../../assets/cobblerJar_thumb.png';
import cobblerCloseup from '../../assets/CobblerCloseUP.jpg';
import smilingWoman from '../../assets/woman-img.png';

import api from '../../api';

import './Shop.scss';

const Shop = () => {
  const [_products, set_products] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await api.getProducts();
    console.log({ products });
    if (products.error) console.log(products.error);
    set_products(products);
  };

  console.log({ _products });

  return (
    <div className='shop'>
      <h1 className='shop-header'>Shop</h1>
      <p className='shop-headertext'>
        Looking for a unque gift for your customers, potential customers, or
        employees? We have the perfect solution for you. Our Fresh baked
        cobblers will make a lasting iimpression.
      </p>
      <section
        className='shop-products'
        onClick={() => history.push('/cobbler-jar')}
      >
        <div className='shop-products-item'>
          <img
            className='shop-products-item-img'
            src={cobblerjarImg}
            alt='Peach Cobbler in Jar'
          />
          <h3 className='shop-products-item-name'>Peach Cobbler 12oz</h3>
          <p className='shop-products-item-price'>$5.00</p>
        </div>
        <div className='shop-products-item'>
          <img
            className='shop-products-item-img'
            src={cobblerCloseup}
            alt='Peach Cobbler Close Up'
          />
          <h3 className='shop-products-item-name'>Peach Cobbler Jar</h3>
          <p className='shop-products-item-price'>$10.50</p>
        </div>
      </section>
      <section className='shop-order'>
        <h1 className='shop-order-header'>Oder Today</h1>
        <div className='shop-order-row'>
          <div className='shop-order-row-img-wrapper'>
            <img
              src={smilingWoman}
              alt='Smiling Woman'
              className='shop-order-row-img-wrapper-img'
            />
          </div>
          <div className='shop-order-row-divider' />
          <div className='shop-order-row-info'>
            <h2 className='shop-order-row-info-header'>Call In Orders</h2>
            <div className='shop-order-row-info-text'>
              Do you like the old fashioned way? Not a techie? Call us to place
              your order.​We are here for you!
            </div>
            <p className='shop-order-row-info-phone'>Phone: 908.481.5499</p>
            <p className='shop-order-row-shop'>And Shop Online</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
