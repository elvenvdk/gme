import React from 'react';

import jarImg from '../../../assets/jarImg.png';

import './CobblerJar.scss';

const CobblerJar = () => {
  return (
    <div className='product-detail'>
      <div className='product-detail-toprow'>
        <img src={jarImg} alt='Cobbler Jar Image' className='product-img' />
        <div className='product-text-wrapper'>
          <h2 className='product-text-wrapper-title'>Peach Cobbler Jar</h2>
          <div className='product-text-wrapper-price'>$10.50</div>
          <p className='product-text-wrapper-desc'>
            Fugia ipsunt. Genditas autatem vellant ureprem perenih icimus
            mintiant omnihit odi blabo. Ut eati blaborem faccnatiat aut ommnit
            eturiae quodio essit quassitiatur site ne quia peri occatur endigen
            ditat enis aut ullacerum hic tendiorumqui conempo rporenctet unturit
            ut excepudis.
          </p>
          <div className='product-text-wrapper-quantity'>
            <input className='quantity-input' type='number' />
            <button className='add-to-cart'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CobblerJar;
