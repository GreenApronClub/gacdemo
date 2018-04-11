import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import NavBar from './containers/navbar/navbar';
import SignUp from './containers/user/signup';
import Login from './containers/user/login';
import ActiveOrders from './containers/dispensary/activeOrders';
import ManageStrains from './containers/dispensary/manage_strains/manageStrains';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        <Route path="/login" render={() => (
          sessionStorage.getItem('jwt') ? (
            <Redirect to="/active-orders" />
          ) : (
            <Login />
          )
        )} />
        <Route path="/signup" component={SignUp} />
        <Route path="/active-orders" render={() => (
          !sessionStorage.getItem('jwt') ? (
            <Redirect to="/login" />
          ) : (
            <ActiveOrders />
          )
        )} />
        <Route path="/manage-strains" render={() => (
          !sessionStorage.getItem('jwt') ? (
            <Redirect to="/login" />
          ) : (
            <ManageStrains />
          )
        )} />
      </div>
    </Router>
  </Provider> ,
  document.querySelector('#root')
);
