import React from 'react';

import './CustomizeOptions.scss';

const CustomizeOptions = () => {
  return (
    <section className='customize'>
      <h1 className='customize-header'>Customization Options</h1>
      <ul className='customize-options'>
        <li className='customize-options-item'>Custom Top labels</li>
        <li className='customize-options-item'>Custom Wrap Around Labels</li>
      </ul>
      <p className='customize-text'>
        Let us do the work for you. Our customer car representatives will take
        your gift list and take care of everything for you. Give us a call at
        908.481.5499 or email us at customization@grandmaemmas.com and we’ll
        take care of the rest.
      </p>
    </section>
  );
};

export default CustomizeOptions;
