import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import HomePage from './home/Home';
import Flavors from './flavors/Flavors';
import Shop from './shop/Shop';
import Checkout from './checkout/Checkout';

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
          <Route path='/flavors' exact component={Flavors} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/shop' exact component={Shop} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
