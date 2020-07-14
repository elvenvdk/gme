import React from 'react';

import cartIcon from '../../assets/cart-icon.png';

import './CartButton.scss';

const CartButton = () => {
  return (
    <div className='cart-button'>
      <button className='cart-button-btn'>
        <div className='cart-button-btn-container'>
          <p className='cart-button-btn-container-counter'>0</p>
          <img
            className='cart-button-btn-container-img'
            src={cartIcon}
            alt='cart icon'
          />
        </div>
      </button>
      <div className='cart-button-amount'>$0.00</div>
    </div>
  );
};

export default CartButton;
