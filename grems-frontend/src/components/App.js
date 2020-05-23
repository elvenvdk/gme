import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';

import HomePage from './Home';
// import Signup from '../auth/Signup';
// import Signin from '../auth/Signin';
import Shop from './Shop';
import Checkout from './checkout/Checkout';

import PageHeader from './pageHeader/PageHeader';
import Nav from './common/nav/Nav';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <PageHeader />
        <Nav classname='app__nav' />
        <Switch>
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/signup' exact component={Signup} /> */}
          {/* <Route path='/signin' exact component={Signin} /> */}
          {/* <Route path='/shop' exact component={Shop} /> */}
          {/* <PrivateRoute path='/checkout' exact component={Checkout} /> */}
          <Route path='/checkout' exact component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
