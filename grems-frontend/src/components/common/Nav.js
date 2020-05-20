import React, { useState, useEfect, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { signout } from '../../../actions/authActions';

import './Nav.scss';

const Nav = (props, { classname }) => {
  const [displayValues, setDisplayValues] = useState({
    showShop: true,
    showLogin: true,
  });
  const history = useHistory();
  const { showShop, showLogin } = displayValues;

  const shopPage = 'http://localhost:3000/shop';
  const signinPage = 'http://localhost:3000/signin';

  useEffect(() => {
    // renderShopBtn();
    // renderSigninBtn();
  }, []);

  const renderShopBtn = () => {
    setDisplayValues({
      ...displayValues,
      showShop: window.location.href !== shopPage,
    });
  };

  const handleSignout = () => {
    props.signout();
    return history.push('/signin');
  };

  const renderSigninBtn = () => {
    setDisplayValues({
      ...displayValues,
      showLogin: props.auth.isLoggedIn,
    });
  };
  console.log(showLogin);
  return (
    <nav className={`nav-default ${classname}`}>
      <ul className='nav-default__list'>
        {showShop && (
          <Link className='nav-default__list__item-login' to='/shop'>
            <li className='nav-default__list__item-shop'>Shop</li>
          </Link>
        )}
        {!props.auth.isLoggedIn ? (
          <Link className='nav-default__list__item-login' to='/signin'>
            <li className='nav-default__list__item-login-item'>Log In</li>
          </Link>
        ) : (
          <li
            className='nav-default__list__item-login-item'
            onClick={handleSignout}
          >
            Log Out
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signout })(Nav);
