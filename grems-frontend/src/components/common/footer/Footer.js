import React from 'react';

import fbIcon from '../../../assets/fb-icon.png';
import igIcon from '../../../assets/insta-icon.png';

import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <h4 className='footer-header'>CONNECT WITH US</h4>
        <div className='footer-divider'>
          <div className='footer-divider-dot' />
          <div className='footer-divider-dot' />
          <div className='footer-divider-dot' />
          <div className='footer-divider-dot' />
          <div className='footer-divider-dot' />
        </div>
        <div className='footer-link-icons'>
          <a className='footer-fb-link' href=''>
            <img className='footer-fb-icon' src={fbIcon} alt='Facebook Icon' />
          </a>
          <a className='footer-ig-link' href=''>
            <img className='footer-ig-icon' src={igIcon} alt='Instagram Icon' />
          </a>
        </div>
        <p className='footer-customer-service'>
          email us : CustomerService@GrandmaEmmas.com
        </p>
      </div>
      <p className='copywrite'>
        Copyright 2020. All Rights Reserved by Grandma.
      </p>
    </>
  );
};

export default Footer;
