import React, { useState } from 'react';

import Button from '../common/button/Button';
import CobblerJar from '../../assets/CustomLabel.jpg';

import './Shop.scss';

const Shop = () => {
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: '',
    instance: {},
    address: '',
  });

  return (
    <div className='shop'>
      <div className='shop__peach-cobbler'>
        <div className='shop__peach-cobbler__img-wrapper'>
          <h1 className='shop__peach-cobbler__img-wrapper__title'>
            Grandma Emma's Peach Cobbler - Original
          </h1>
          <img
            className='shop__peach-cobbler__img-wrapper__img'
            src={CobblerJar}
            alt='peach-cobbler-jar-image'
          />
        </div>

        <Button btnType='button'>Buy Now</Button>
      </div>
    </div>
  );
};

export default Shop;
