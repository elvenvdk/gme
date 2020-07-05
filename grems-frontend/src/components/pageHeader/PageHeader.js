import React from 'react';
import { Link } from 'react-router-dom';

import logoHeader from '../../assets/grems_logo_header.png';

import './PageHeader.scss';

const PageHeader = () => {
  return (
    <div className='pageHeader'>
      <p className='pageHeader-phone'>973.544.8032</p>
      <Link className='pageHeader-mainlink' to='/'>
        <img
          className='pageHeader-mainlink'
          src={logoHeader}
          alt="Grandma Emma's Header Logo"
        />
      </Link>
      <Link className='pageHeader-login'>Login</Link>
      <Link className='pageHeader-login' to='/signup'>
        Signup
      </Link>
    </div>
  );
};

export default PageHeader;
