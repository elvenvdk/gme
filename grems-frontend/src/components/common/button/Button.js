import React from 'react';

import './Button.scss';

const Button = ({ classname, btnType, btnName, children, clickhandler }) => {
  return (
    <>
      <button
        className={`btn-default ${classname}`}
        type={btnType}
        name={btnName}
        onClick={clickhandler}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
