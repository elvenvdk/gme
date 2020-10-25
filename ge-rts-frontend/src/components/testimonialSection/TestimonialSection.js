import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './TestimonialSection.scss';

const TestimonialSection = () => {
  return (
    <div className='testimonials'>
      <h1 className='testimonials-header'>Here's what they're saying...</h1>
      <div className='testimonials-text-wrapper'>
        <div className='testimonials-item'>
          <FontAwesomeIcon
            className='testimonials-item-quote'
            icon={faQuoteRight}
          />
          <h3 className='testimonials-item-header'>
            Just got Grandma Emma's peach cobbler!
          </h3>
          <p className='testimonials-item-text'>
            I just got Grandma Emma's peach cobbler at the Maplewood Farmer's
            Market and it is INCREDIBLE. It has the perfect balance of sweetness
            - not overpowering, but it's filled with so much flavor. My only
            regret is that I bought only one!! I'll be back for more.
          </p>
          <hr />
          <p className='testimonials-item-customer-name'>Catherine Racette</p>
          <p className='testimonials-item-customer-type'>Customer</p>
        </div>
        <div className='testimonials-item'>
          <FontAwesomeIcon
            className='testimonials-item-quote'
            icon={faQuoteRight}
          />
          <h3 className='testimonials-item-header'>My mother loved it!!</h3>
          <p className='testimonials-item-text'>
            My mother loved the sweet treat. Her birthday is on the 27th and I
            want to treat her to some Grandma Emmas peach cobbler, because she
            hasn't tried it yet. It's one of my favorite desserts.
          </p>
          <hr />
          <p className='testimonials-item-customer-name'>Felicia Hall</p>
          <p className='testimonials-item-customer-type'>Customer</p>
        </div>
        <div className='testimonials-item'>
          <FontAwesomeIcon
            className='testimonials-item-quote'
            icon={faQuoteRight}
          />
          <h3 className='testimonials-item-header'>Awww man!!!</h3>
          <p className='testimonials-item-text'>
            I didn't know this was your family recipe. I was just telling my son
            I tasted the best peach cobbler ever!!! I pucked up 2 from
            Ambassadors on Dodd St. It's absolutely delicious!!!
            Congratulations!!!
          </p>
          <hr />
          <p className='testimonials-item-customer-name'>Jesse Jordan</p>
          <p className='testimonials-item-customer-type'>Customer</p>
        </div>
        <div className='testimonials-item'>
          <FontAwesomeIcon
            className='testimonials-item-quote'
            icon={faQuoteRight}
          />
          <h3 className='testimonials-item-header'>OMG!!</h3>
          <p className='testimonials-item-text'>
            It's good cold so I know it's delicious hot. Heating it now - Thanks
            blessings to you
          </p>
          <hr />
          <p className='testimonials-item-customer-name'>Jamie McAndrew</p>
          <p className='testimonials-item-customer-type'>Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
