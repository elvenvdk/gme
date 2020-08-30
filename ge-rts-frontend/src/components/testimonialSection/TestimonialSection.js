import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './TestimonialSection.scss';

const TestimonialSection = () => {
  return (
    <div className='testimonials'>
      <h1 className='testemonials-header'>Here's what they're saying...</h1>
      <div className='testemonials-text-wrapper'>
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
            telling my son I tasted the best peach cobbler ever!!!! I picked up
            two from Ambassadors on Dodd St. It's absolutely delicious!!!
            Congratulations!!!
          </p>
          <hr />
          <p className='testemonials-customer-name'>Jesse Jordan</p>
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
            telling my son I tasted the best peach cobbler ever!!!! I picked up
            two from Ambassadors on Dodd St. It's absolutely delicious!!!
            Congratulations!!!
          </p>
          <hr />
          <p className='testemonials-customer-name'>Jesse Jordan</p>
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
            telling my son I tasted the best peach cobbler ever!!!! I picked up
            two from Ambassadors on Dodd St. It's absolutely delicious!!!
            Congratulations!!!
          </p>
          <hr />
          <p className='testemonials-customer-name'>Jesse Jordan</p>
          <p className='testemonials-customer-type'>Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
