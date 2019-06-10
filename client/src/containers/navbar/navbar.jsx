// NODE_MODULES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// ACTION CREATORS
import { logoutActions, selectRoute, sessionActions } from '../../actions';
// COMPONENTS
import LoggedInNavbar from './LoggedInNavbar';
import LoginNavbar from './LoginNavbar';
// import { getNavData } from './handler_navbar';
import './navbar.css';
import './media-queries-navbar.css';

class NavBar extends Component {
  static propTypes = {
    checkUser: PropTypes.func.isRequired,
    // selectRoute: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    // var currentPath = this.props.history.location.pathname;
    // console.log(currentPath)
    // var navData = getNavData(currentPath, this.props);
    // var primaryTitle = navData[0];
    // var secondaryTitle = navData[1];
    // var primaryRoute = navData[2];
    // var secondaryRoute = navData[3];
    return (isLoggedIn) ? <LoggedInNavbar logOut={logOut} /> : <LoginNavbar />;
  }
}

const mapStateToProps = state => ({
  route: state.route,
  isLoggedIn: state.session.isLoggedIn,
});

const mapDispatchToProps = {
  selectRoute,
  logOut: logoutActions.logOut,
  checkUser: sessionActions.checkUser,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
