import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './auth/PrivateRoute';

import HomePage from './components/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Shop from './components/Shop';
import Checkout from './components/checkout/Checkout';

import PageHeader from './components/PageHeader';
import Nav from './components/common/Nav';

const App = () => {
  return (
    <Router classname='app'>
      <PageHeader />
      {/* <Nav classname='app__nav' /> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/shop' exact component={Shop} />
        {/* <PrivateRoute path='/checkout' exact component={Checkout} /> */}
        <Route path='/checkout' exact component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
