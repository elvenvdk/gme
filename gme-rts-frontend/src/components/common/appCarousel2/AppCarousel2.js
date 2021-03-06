import React, { useState } from 'react';
import { Carousel } from 'antd';

import slider1Img from '../../../assets/slider01.jpg';

import './AppCarousel2.scss';

const AppCarousel = () => {
  return (
    <Carousel autoplay>
      <div className='carousel-item-wrapper'>
        <h1 className='carousel-item-header'>Delicious</h1>
        <p className='carousel-item-text'></p>
      </div>
    </Carousel>
  );
};

export default AppCarousel;
