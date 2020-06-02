import React from 'react';

import cobblerjarImg from '../../assets/cobblerJar_thumb.png';
import cobblerCloseup from '../../assets/CobblerCloseUP.jpg';
import smilingWoman from '../../assets/woman-img.png';

import OrderSection from '../orderSection/OrderSection';

import './Flavors.scss';

const Flavors = () => {
  return (
    <div className='flavors'>
      <h1 className='flavors-header'>Flavors</h1>
      <p className='flavors-headertext'>
        The following flavors are currently availble for purchase online,please
        note that the flavors shown here may not all be available at our retail
        outlets.
      </p>
      <section className='flavors-products'>
        <div className='flavors-products-item'>
          <h3 className='flavors-products-item-name'>Peach Cobbler Jar</h3>
          <img
            className='flavors-products-item-img'
            src={cobblerCloseup}
            alt='Peach Cobbler Close Up'
          />

          <p className='flavors-products-item-price'>
            Fugia ipsunt. Genditas autatem vellant ureprem perenih icimus
            mintiant omnihit odi blabo. Ut eati blaborem faccnatiat aut ommnit
            eturiae quodio essit quassitiatur site ne quia peri occatur endigen
            ditat enis aut ullacerum hic tendiorumqui conempo rporenctet unturit
            ut excepudis.
          </p>
        </div>
        <div className='flavors-products-item'>
          <h3 className='flavors-products-item-name'>Peach Cobbler Jar</h3>
          <img
            className='flavors-products-item-img'
            src={cobblerCloseup}
            alt='Peach Cobbler Close Up'
          />

          <p className='flavors-products-item-price'>
            Fugia ipsunt. Genditas autatem vellant ureprem perenih icimus
            mintiant omnihit odi blabo. Ut eati blaborem faccnatiat aut ommnit
            eturiae quodio essit quassitiatur site ne quia peri occatur endigen
            ditat enis aut ullacerum hic tendiorumqui conempo rporenctet unturit
            ut excepudis.
          </p>
        </div>
        <div className='flavors-products-item'>
          <h3 className='flavors-products-item-name'>Peach Cobbler Jar</h3>
          <img
            className='flavors-products-item-img'
            src={cobblerCloseup}
            alt='Peach Cobbler Close Up'
          />

          <p className='flavors-products-item-price'>
            Fugia ipsunt. Genditas autatem vellant ureprem perenih icimus
            mintiant omnihit odi blabo. Ut eati blaborem faccnatiat aut ommnit
            eturiae quodio essit quassitiatur site ne quia peri occatur endigen
            ditat enis aut ullacerum hic tendiorumqui conempo rporenctet unturit
            ut excepudis.
          </p>
        </div>
      </section>
      <section className='flavors-customize'>
        <h1 className='flavors-customize-header'>Customization Options</h1>
        <ul className='flavors-customize-options'>
          <li className='flavors-customize-options-item'>Custom Top labels</li>
          <li className='flavors-customize-options-item'>
            Custom Wrap Around Labels
          </li>
        </ul>
        <p className='flavors-customize-text'>
          Let us do the work for you. Our customer car representatives will take
          your gift list and take care of everything for you. Give us a call at
          908.481.5499 or email us at customization@grandmaemmas.com and we’ll
          take care of the rest.
        </p>
      </section>
      <OrderSection />
    </div>
  );
};

export default Flavors;
