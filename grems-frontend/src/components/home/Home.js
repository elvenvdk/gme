import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import AppCarousel from '../common/appCarousel/AppCarousel';
import ContactUs from '../contactUs/ContactUs';

import GremsImg from '../../assets/grems_grandma_emma2.png';
import PeachesImg from '../../assets/small-aples.png';
import CorporateImg from '../../assets/corporate1.jpg';
import EventsGiftImg from '../../assets/events-gift.jpg';
import img1 from '../../assets/gallery01.jpg';
import img2 from '../../assets/gallery02.jpg';
import img3 from '../../assets/gallery03.jpg';
import img4 from '../../assets/gallery04.jpg';
import img5 from '../../assets//gallery05.jpg';
import img6 from '../../assets/video-img.png';
import womanImg from '../../assets/woman-img.png';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <AppCarousel />
      <section className='home-about'>
        <img
          className='home-about-img-main'
          src={GremsImg}
          alt='Grandma Emma Large'
        />
        <div className='home-about-text-wrapper'>
          <h1 className='home-about-header'>Old Fashioned Goodness</h1>
          <p className='home-about-text'>
            Grandma Lucy Emma Dawson loved to bake and she loved sharing
            recipes. Among her favorites was her peach cobbler. I remember as a
            child coming to visit. Before I could even get in the door, I’d be
            greeted by the wonderful smells of nutmeg, cinnamon and of course,
            peaches cooking on the stove.
          </p>
          <p className='home-about-text'>
            I’d rush to remove my coat and then make a straight line to the
            kitchen where I’d sit anxiously waiting for that amazing cobbler to
            be done.
          </p>
          <h1 className='home-about-header'>Try it today.</h1>
          <p className='home-about-text'>
            The taste is so incredibly rich and flavorful that everyone will
            think it came straight from your oven instead of ours. But we won’t
            tell!
          </p>

          <img
            className='home-about-img-second'
            src={PeachesImg}
            alt='Peaches'
          />
        </div>
      </section>

      <section className='home-gift'>
        <h1 className='home-gift-header'>Our Amazing Gift Pack</h1>
        <div className='home-gift-images'>
          <div className='home-gift-images-wrapper'>
            <img src={CorporateImg} alt='Corporate' />
            <p className='home-gift-images-wrapper-text'>Corporate Gift</p>
          </div>
          <div className='home-gift-images-wrapper'>
            <img src={EventsGiftImg} alt='Events Gifts' />
            <p className='home-gift-images-wrapper-text'>
              Wedding & Events Gift
            </p>
          </div>
        </div>
      </section>

      <section className='home-photo-gal'>
        <h1 className='home-photo-gal-header'>Photo Gallery</h1>
        <div className='home-photo-gal-gallery'>
          <img className='gallery-img' src={img1} alt='' />
          <img className='gallery-img' src={img2} alt='' />
          <img className='gallery-img' src={img3} alt='' />
          <img className='gallery-img' src={img4} alt='' />
          <img className='gallery-img' src={img5} alt='' />
          <img className='gallery-img' src={img6} alt='' />
        </div>
      </section>
      <section className='home-order'>
        <div className='order-today'>
          <h2 className='order-today-header'>Order Today</h2>
          <div className='order-row'>
            <img
              className='order-row-img'
              src={womanImg}
              alt='Woman smiling image'
            />
            <div className='order-info'>
              <h4 className='order-info-header'>Call In Orders</h4>
              <p className='order-info-text'>
                Do you like the old fashioned way? Not a techie? Call us to
                place your order.​We are here for you!
              </p>
              <p className='order-info-phone'>
                Phone:<a href='tel: 908.481.5499'>908.481.5499</a>
              </p>
              <p className='order-info-andshop'>And Shop Online</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='videowrapper'>
          <h4 className='order-info-video-header'>Our Video</h4>
          <iframe
            className='order-video'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/aLXXDG6IRpY'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          />
        </div>
      </section>

      <section className='home-testemonials'>
        <h1 className='home-testemonials-header'>
          Here's what they're saying...
        </h1>
        <div className='home-testemonials-text-wrapper'>
          <div className='testemonials-item'>
            <FontAwesomeIcon
              className='testemonials-item-quote'
              icon={faQuoteRight}
            />
            <h3 className='testemonials-header'>Thank You!</h3>
            <p className='testemonials-text'>
              My mother loved the sweet treat. Her birthday is on the 27th and I
              want to treat her to some Grandma Emmas peach cobbler, because she
              hasn't tried it yet. It's one of my favorite desserts.
            </p>
            <hr />
            <p className='testemonials-customer-name'>Felicia Hall</p>
            <p className='testemonials-customer-type'>Customer</p>
          </div>
          <div className='testemonials-item'>
            <FontAwesomeIcon
              className='testemonials-item-quote'
              icon={faQuoteRight}
            />
            <h3 className='testemonials-header'>Delicious!</h3>
            <p className='testemonials-text'>
              Awww man!!! I didn't know this was your family recipe. I was just
              telling my son I tasted the best peach cobbler ever!!!! I picked
              up two from Ambassadors on Dodd St. It's absolutely delicious!!!
              Congratulations!!!
            </p>
            <hr />
            <p className='testemonials-customer-name'>Jesse Jordan</p>
            <p className='testemonials-customer-type'>Customer</p>
          </div>
        </div>
      </section>

      <ContactUs />
    </div>
  );
};

export default Home;
