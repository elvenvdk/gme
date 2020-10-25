import React, { useState } from 'react';
import { Carousel } from 'antd';

import slider1Img from '../../../assets/slider01.jpg';

import './AppCarousel.scss';

const AppCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          className='carousel-item'
          src={slider1Img}
          alt='Peach Cobbler Large'
        />
      </div>
      <div>
        <img
          className='carousel-item'
          src={slider1Img}
          alt='Peach Cobbler Large'
        />
      </div>
      <div>
        <img
          className='carousel-item'
          src={slider1Img}
          alt='Peach Cobbler Large'
        />
      </div>
    </Carousel>
  );
};

export default AppCarousel;
