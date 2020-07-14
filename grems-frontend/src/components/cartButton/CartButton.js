import React, { useEffect } from 'react';
import { useGlobal } from 'reactn';
import { useHistory } from 'react-router-dom';

import cartIcon from '../../assets/cart-icon.png';

import './CartButton.scss';
import { formatCurrency } from '../../helpers';

const CartButton = () => {
  const [order] = useGlobal('order');
  const history = useHistory();

  useEffect(() => {
    console.log({ order });
  }, [order]);

  return (
    <div className='cart-button'>
      <button className='cart-button-btn' onClick={() => history.push('/cart')}>
        <div className='cart-button-btn-container'>
          <p className='cart-button-btn-container-counter'>
            {order?.quantity || 0}
          </p>
          <img
            className='cart-button-btn-container-img'
            src={cartIcon}
            alt='cart icon'
          />
        </div>
      </button>
      <div className='cart-button-amount'>
        {formatCurrency(order?.price || 0)}
      </div>
    </div>
  );
};

export default CartButton;
