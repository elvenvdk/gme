import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/home/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import Shop from './components/shop/Shop';

import Nav from './components/common/navbar/Nav';

import './App.scss';

const App = () => {
  return (
    <Router classname='app'>
      <Nav classname='app__nav' />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/shop' exact component={Shop} />
      </Switch>
    </Router>
  );
};

export default App;
