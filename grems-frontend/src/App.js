import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './components/home/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
