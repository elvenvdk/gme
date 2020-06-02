import React from 'react';

import smilingWoman from '../../assets/woman-img.png';

import './OrderSection.scss';

const OrderSection = () => {
  return (
    <section className='order'>
      <h1 className='order-header'>Oder Today</h1>
      <div className='order-row'>
        <div className='order-row-img-wrapper'>
          <img
            src={smilingWoman}
            alt='Smiling Woman'
            className='order-row-img-wrapper-img'
          />
        </div>
        <div className='order-row-divider' />
        <div className='order-row-info'>
          <h2 className='order-row-info-header'>Call In Orders</h2>
          <div className='order-row-info-text'>
            Do you like the old fashioned way? Not a techie? Call us to place
            your order.​We are here for you!
          </div>
          <p className='order-row-info-phone'>Phone: 908.481.5499</p>
          <p className='order-row-shop'>And Shop Online</p>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
