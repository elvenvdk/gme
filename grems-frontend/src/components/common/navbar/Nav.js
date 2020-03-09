import React, { useState, useEfect, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ classname }) => {
  const [displayValues, setDisplayValues] = useState({
    showShop: true,
    showLogin: true,
  });

  const { showShop, showLogin } = displayValues;

  const shopPage = 'http://localhost:3000/shop';
  const signinPage = 'http://localhost:3000/signin';

  useEffect(() => {
    renderShopBtn();
    renderSigninBtn();
  }, []);

  const renderShopBtn = () => {
    setDisplayValues({
      ...displayValues,
      showShop: window.location.href !== shopPage,
    });
  };

  const renderSigninBtn = () => {
    setDisplayValues({
      ...displayValues,
      showLogin: window.location.href !== signinPage,
    });
  };

  return (
    <nav className={`nav-default ${classname}`}>
      <ul className='nav-default__list'>
        {showShop && (
          <Link className='nav-default__list__item-login' to='/shop'>
            <li className='nav-default__list__item-shop'>Shop</li>
          </Link>
        )}
        {showLogin && (
          <Link className='nav-default__list__item-login' to='/signin'>
            <li className='nav-default__list__item-login-item'>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
