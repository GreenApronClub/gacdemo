// NODE_MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// CONTAINERS
import NavBar from './containers/navbar/Navbar';
import SignUp from './containers/user/Signup';
import Login from './containers/user/Login';
import ActiveOrders from './containers/dispensary/orders/activeOrders';
import ManageStrain from './containers/dispensary/manage_strains/manageStrain';
import ManageStrains from './containers/dispensary/manage_strains/manageStrains';
import AddStrain from './containers/dispensary/manage_strains/addStrain';
import EditStrain from './containers/dispensary/manage_strains/editStrain';
// REDUCER
import reducers from './reducers';
// STYLESHEET
import './index.css';


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="main-div">
        <NavBar />
        <Route
          exact
          path="/login"
          render={() => (
            sessionStorage.getItem('jwt') ? (
              <Redirect to="/active-orders" />
            ) : (
              <Login />
            )
          )}
        />
        <Route
          exact
          path="/signup"
          component={SignUp}
        />
        <Route
          exact
          path="/active-orders"
          render={() => (
            !sessionStorage.getItem('jwt') ? (
              <Redirect to="/login" />
            ) : (
              <ActiveOrders />
            )
          )}
        />
        <Route
          exact
          path="/manage-strains"
          render={() => (
            !sessionStorage.getItem('jwt') ? (
              <Redirect to="/login" />
            ) : (
              <ManageStrains />
            )
          )}
        />
        <Route
          exact
          path="/manage-strains/add"
          render={() => (
            !sessionStorage.getItem('jwt') ? (
              <Redirect to="/login" />
            ) : (
              <AddStrain />
            )
          )}
        />
        <Route
          exact
          path="/manage-strain/:strainId/edit"
          render={() => (
            !sessionStorage.getItem('jwt') ? (
              <Redirect to="/login" />
            ) : (
              <EditStrain />
            )
          )}
        />
        <Route
          exact
          path="/manage-strain/:strainId"
          render={() => (
            !sessionStorage.getItem('jwt') ? (
              <Redirect to="/login" />
            ) : (
              <ManageStrain />
            )
          )}
        />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
