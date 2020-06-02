import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import HomePage from './home/Home';
import Flavors from './flavors/Flavors';
import Shop from './shop/Shop';
import Checkout from './checkout/Checkout';
import CorporateGifts from './corporateGifts/CorporateGifts';

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
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/flavors' exact component={Flavors} />
          <Route path='/corporate-gifts' exact component={CorporateGifts} />
          <Route path='/checkout' exact component={Checkout} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
