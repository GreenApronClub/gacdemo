import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { selectRoute } from '../../actions/index';
import { logOut } from '../../actions/logout/actionLogout';
import { checkUser } from '../../actions/user/actionSession';
import { bindActionCreators } from 'redux';
// import { getNavData } from './handler_navbar';
import './navbar.css';
import './media-queries-navbar.css';

class NavBar extends Component {
  componentDidMount() {
    this.props.checkUser();
  }
  render() {
    // var currentPath = this.props.history.location.pathname;
    // console.log(currentPath)
    // var navData = getNavData(currentPath, this.props);
    // var primaryTitle = navData[0];
    // var secondaryTitle = navData[1];
    // var primaryRoute = navData[2];
    // var secondaryRoute = navData[3];

    if(this.props.isLoggedIn === true) {
      return (
        <div>
          <nav className="navbar navbar-expand-xs navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <img src="/green-apron-club-logo.png" alt="logo" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="container nav-content">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <button className="nav-button nav-button-orders" data-toggle="collapse" data-target="#navbarContent">
                      <div>
                        <i className="ion-ios-home nav-icons"></i>
                        <span className="nav-title">Home</span>
                      </div>
                    </button>
                  </div>
                  <div className="col-md-3">
                    <NavLink to="/active-orders">
                      <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                        <div>
                          <i className="ion-ios-box nav-icons"></i>
                          <span className="nav-title">Active orders</span>
                        </div>
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-md-3">
                    <NavLink to="/manage-strains">
                      <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                        <div>
                          <i className="ion-leaf nav-icons"></i>
                          <span className="nav-title">Manage strains</span>
                        </div>
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-md-3">
                    <NavLink to="/manage-strains/add">
                      <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                        <div>
                          <i className="ion-plus nav-icons"></i>
                          <span className="nav-title">Add strain</span>
                        </div>
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-md-3">
                    <button className="nav-button nav-button-logout" data-toggle="collapse" data-target="#navbarContent" onClick={() => this.props.logOut(this.props)}>
                      <div>
                        <i className="ion-log-out nav-icons"></i>
                        <span className="nav-title">Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/active-orders" className="link-button" activeClassName="activePrimary">
                      <div>
                        <h4>Active orders</h4>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/manage-strains" className="link-button" activeClassName="activeSecondary">
                      <div>
                        <h4>Manage strains</h4>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container drop-down-content">
            <button className="drop-button" data-toggle="collapse" data-target="#navbarContent">
              <div>
                <i className="ion-grid drop-down"></i>
              </div>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-xs navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <img src="/green-apron-club-logo.png" alt="logo" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <div className="nav-content">
                <div className="row no-gutters">
                  <div className="col-4">
                    <button className="nav-button nav-button-orders" data-toggle="collapse" data-target="#navbarContent">
                      <div>
                        <i className="ion-ios-home nav-icons"></i>
                        <span className="nav-title">Home</span>
                      </div>
                    </button>
                  </div>
                  <div className="col-4">
                    <NavLink to="/login">
                      <button className="nav-button nav-button-login" data-toggle="collapse" data-target="#navbarContent">
                        <div>
                          <i className="ion-log-in nav-icons"></i>
                          <span className="nav-title">Login</span>
                        </div>
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-4">
                    <NavLink to="/signup">
                      <button className="nav-button nav-button-signup" data-toggle="collapse" data-target="#navbarContent">
                        <div>
                          <i className="ion-log-in nav-icons"></i>
                          <span className="nav-title">Signup</span>
                        </div>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="container d-none d-sm-block">
            <div className="row no-gutters">
              <div className="col-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/login" className="link-button" activeClassName="activePrimary">
                      <div>
                        <h4>login</h4>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/signup" className="link-button" activeClassName="activeSecondary">
                      <div>
                        <h4>signup</h4>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-sm-none">
            <div className="row no-gutters">
              <div className="col-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/login" className="link-button" activeClassName="activePrimaryMobile">
                        <span className="secondary-nav-title">login</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="dash-box">
                  <div className="content-box">
                    <NavLink to="/signup" className="link-button" activeClassName="activeSecondaryMobile">
                        <span className="secondary-nav-title">signup</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container drop-down-content">
            <button className="drop-button" data-toggle="collapse" data-target="#navbarContent">
              <div>
                <i className="ion-grid drop-down"></i>
              </div>
            </button>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    route: state.route,
    isLoggedIn: state.session.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRoute: selectRoute, logOut: logOut, checkUser: checkUser }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
