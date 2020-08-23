import React from 'react';

import giftsImg from '../../assets/giftsImg1.jpg';

import CustomizeOptions from '../customizeOptions/CustomizeOptions';
import OrderSection from '../orderSection/OrderSection';

import './CorporateGifts.scss';

const CorporateGifts = () => {
  return (
    <div className='corporate-gifts'>
      <h1 className='corporate-gifts-header'>
        Unique Gifts your Customers and Employees will Never Forget
      </h1>
      <div className='corporate-gifts-main-wrapper'>
        <div className='text-wrapper'>
          <p className='text-wrapper-text'>
            Looking for a unique gift for your customers, potential customers or
            employees? We have The perfect solution for you. Our fresh baked
            cobblers will make a lasting impression and ensure your gift is the
            one that stands out from the rest. Oh and did we mention they can be
            customized? Send us your logos, and we’ll design labels to brand
            your ja r…just for you.
          </p>
          <h2 className='text-wrapper-header'>Perfect for</h2>
          <ul className='text-wrapper-list'>
            <li className='text-wrapper-list-item'>Holiday Gifting</li>
            <li className='text-wrapper-list-item'>
              Employee & Customer Rewards
            </li>
            <li className='text-wrapper-list-item'>Retention/Renewal Gifts</li>
            <li className='text-wrapper-list-item'>
              Conference Attendee Gifts
            </li>
            <li className='text-wrapper-list-item'>Lead Generation</li>
            <li className='text-wrapper-list-item'>
              Contact us to discuss custom options
            </li>
          </ul>
        </div>
        <div className='image-wrapper'>
          <img src={giftsImg} alt='Gifts' />
        </div>
      </div>
      <CustomizeOptions />
      <OrderSection />
    </div>
  );
};

export default CorporateGifts;
