import React from 'react';

import './Button.scss';

const Button = ({ children, ...rest }) => {
  return (
    <>
      <button className='btn'>{children}</button>
    </>
  );
};

export default Button;
