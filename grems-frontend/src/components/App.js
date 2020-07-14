import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import Signin from './auth/signin/Signin';
import Signup from './auth/signup/Signup';

import HomePage from './home/Home';
import Flavors from './flavors/Flavors';
import Shop from './shop/Shop';
import Checkout from './checkout/Checkout';
import CorporateGifts from './corporateGifts/CorporateGifts';
import WeddingEventGifts from './weddingEventGifts/WeddingEventGifts';
import Contact from './contact/Contact';
import ProductDetail from './shop/productDetail/ProductDetail';
import Cart from './cart/Cart';

import PageHeader from './pageHeader/PageHeader';
import Nav from './common/nav/Nav';
import Footer from './common/footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <PageHeader />
        <Nav classname='app__nav' />
        <Switch>
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />

          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route path='/flavors' exact component={Flavors} />
          <Route path='/corporate-gifts' exact component={CorporateGifts} />
          <Route
            path='/wedding-and-event-gifts'
            exact
            component={WeddingEventGifts}
          />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/checkout' exact component={Checkout} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
