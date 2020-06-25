import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import api from '../api';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      api.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/signin', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
