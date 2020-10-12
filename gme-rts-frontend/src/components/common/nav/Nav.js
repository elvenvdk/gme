import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';
import CartButton from '../../cartButton/CartButton';

const Nav = () => {
  const [selected, setSelected] = useState(null);

  const menuItems = [
    { name: 'Home', url: 'http://localhost:3000' },
    { name: 'About', url: 'http://localhost:3000#home_about' },
    { name: 'Survey', url: 'http://localhost:3000/survey' },
    // { name: 'Shop', url: '/shop' },
    // { name: 'Flavors', url: '/flavors' },
    // { name: 'Corporate Gifts', url: '/corporate-gifts' },
    // {
    //   name: 'Wedding and Event Gifts',
    //   url: '/wedding-and-event-gifts',
    // },
    { name: 'Contact Us', url: 'contact-us' },
  ];

  const renderMenu = () => (
    <ul className={`nav-menu`}>
      {menuItems.map((i, idx) => (
        <li
          id={idx}
          key={i.name}
          className={`nav-item ${selected}`}
          onMouseOver={(e) => console.log({ idx, e: e.target.id })}
        >
          <a className='nav-item-link' href={i.url}>
            {i.name}
          </a>
          {i.name === 'Contact Us' && (
            <p className='nav-item-phone'>973-544-8032</p>
          )}
        </li>
      ))}
      {/* <CartButton /> */}
    </ul>
  );

  return <div className='nav'>{renderMenu()}</div>;
};

export default Nav;
