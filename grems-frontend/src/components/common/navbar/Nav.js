import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ classname }) => {
  return (
    <nav className={`nav-default ${classname}`}>
      <ul className='nav-default__list'>
        <Link className='nav-default__list__item-login' to='/shop'>
          <li className='nav-default__list__item-shop'>Shop</li>
        </Link>
        <Link className='nav-default__list__item-login' to='/signin'>
          <li className='nav-default__list__item-login-item'>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
