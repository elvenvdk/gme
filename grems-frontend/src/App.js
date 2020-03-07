import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/home/Home';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
      </Switch>
    </Router>
  );
};

export default App;
