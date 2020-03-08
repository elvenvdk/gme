import React from 'react';

import GremsImg from '../../assets/grems_grandma_emma_bw.jpg';
import CobblerCloseupImg from '../../assets/CobblerCloseUP.jpg';
import BabyShowerImg from '../../assets/BabyCobbler.jpg';
import CobblerSlantImg from '../../assets/CobblerSlant.jpg';
import CustomLabelImg from '../../assets/CustomLabel.jpg';
import PackageImg from '../../assets/Package.jpg';
import BabyCobblerImg from '../../assets/BabyCobbler.jpg';
import FacebookIcon from '../../assets/facebook-brands.svg';

import './Home.scss';

const Home = () => {
  const cobblerImages = [
    CobblerCloseupImg,
    BabyCobblerImg,
    CobblerSlantImg,
    CustomLabelImg,
    PackageImg,
    BabyShowerImg,
  ];

  const renderCobblerImages = () =>
    cobblerImages.map((img, idx) => (
      <img
        className='home__section-photos__img'
        key={idx}
        src={img}
        alt={img}
      />
    ));
  return (
    <div className='home'>
      <section className='home__section-top'>
        <h4 className='home__section-top__header1'>Homemade</h4>
        <h2 className='home__section-top__header2'>Peach Cobbler</h2>
      </section>
      <div className='home__section-top-mid'></div>
      <section className='home__section-mid'>
        <div className='home__section-mid__img'>
          <img
            className='home__section-mid__img-ge'
            src={GremsImg}
            alt='grandma-emma'
          />
        </div>
        <div className='home__section-mid__text'>
          <p className='home__section-mid__text_p'>
            Grandma Lucy Emma Dawson loved to bake and she loved sharing
            recipes. Among her favorites was her peach cobbler. I remember as a
            child coming to visit. Before I could even get in the door, I'd be
            greeted by the wonderful smells of nutmeg, cinnamon and of course,
            peaches cooking on the stove.
          </p>
          <p className='home__section-mid__text_p'>
            I'd rush to remove my coat and then make a straight line to the
            kitchen where I'd sit anxiously waiting for that amazing cobbler to
            be done.
          </p>
          <p className='home__section-mid__text_p'>
            <i>Try it today.</i> The taste is so incredibly rich and flavorful
            that everyone will think it came straight from your oven instead of
            ours.
            <i>But we won’t tell!</i>
          </p>
        </div>
      </section>
      <section className='home__section-photos'>
        {renderCobblerImages()}
      </section>
      <section className='home__section-social'>
        <h3 className='home__section-social__title'>
          Connect with us on social:
        </h3>
        <a href='https://www.facebook.com/Grandma-Emmas-104687830981656/?modal=admin_todo_tour'>
          <img
            style={{ height: '50px', width: '50px' }}
            src={FacebookIcon}
            alt='Facebook-icon'
          />
        </a>
      </section>
    </div>
  );
};

export default Home;
