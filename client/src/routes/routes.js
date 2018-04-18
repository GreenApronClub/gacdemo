import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import NavBar from '../containers/navbar/navbar';
import SignUp from '../containers/user/signup';
import Login from '../containers/user/login';
import ActiveOrders from '../containers/dispensary/orders/activeOrders';
import ManageStrains from '../containers/dispensary/manage_strains/manageStrains';
import AddStrain from '../containers/dispensary/manage_strains/addStrain';


export function assembleRoutes() {
  return(
    <Route>
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
        <Route path="/add-strain" render={() => (
          !sessionStorage.getItem('jwt') ? (
            <Redirect to="/login" />
          ) : (
            <AddStrain />
          )
        )} />
      </div>
    </Route>
  );
}
