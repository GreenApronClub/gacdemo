import React from 'react';
import { Route, Redirect } from 'react-router';
import SignUp from '../containers/user/signup';
import Login from '../containers/user/login';
import ActiveOrders from '../containers/dispensary/activeOrders';
import App from '../containers/App';


export default (
  <Route path="/" component={App}>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/active-orders" render={() => (
      !sessionStorage.getItem('jwt') ? (
        <Redirect to="/login" />
      ) : (
        <ActiveOrders />
      )
    )} />
  </Route>
);
