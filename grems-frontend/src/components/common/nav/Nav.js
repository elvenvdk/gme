import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const [selected, setSelected] = useState(null);

  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Flavors', url: '/flavors' },
    { name: 'Corporate Gifts', url: '/corporate-gifts' },
    {
      name: 'Wedding and Event and Event Gifts',
      url: '/wedding-and-event-gifts',
    },
    { name: 'Contact Us', url: 'contact-us' },
  ];

  const renderMenu = () => (
    <ul className={`nav-menu`}>
      {menuItems.map((i, idx) => (
        <li
          key={i.name}
          className={`nav-item ${selected}`}
          onMouseOver={(i) => console.log({ idx })}
        >
          <Link className='nav-item-link' to={i.url}>
            {i.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return <div className='nav'>{renderMenu()}</div>;
};

export default Nav;
