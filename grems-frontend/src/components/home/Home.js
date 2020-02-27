import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <nav className='home__nav'>
        <ul className='home__nav__list'>
          <li className='home__nav__list__item-shop'>Shop</li>
          <li className='home__nav__list__item-login'>Login</li>
        </ul>
      </nav>
      <section className='home__section-top'>
        <h4 className='home__section-top__header1'>Homemade</h4>
        <h2 className='home__section-top__header2'>Peach Cobbler</h2>
      </section>
    </div>
  );
};

export default Home;
