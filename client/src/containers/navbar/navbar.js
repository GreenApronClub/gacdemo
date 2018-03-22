import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { selectRoute } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { getNavData } from './handler_navbar';
import './navbar.css';

class NavBar extends Component {
  render() {
    var currentPath = this.props.location.pathname;
    var navData = getNavData(currentPath, this.props);
    var primaryClass = navData[2];
    var secondaryClass = navData[3];
    var primaryTitle = navData[0];
    var secondaryTitle = navData[1];

    return (
      <div className="container">
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
                      <i className="ion-ios-home-outline nav-icons"></i>
                      <h5 className="nav-title">Home</h5>
                    </div>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                    <div>
                      <i className="ion-leaf nav-icons"></i>
                      <h5 className="nav-title">Shop</h5>
                    </div>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                    <div>
                      <i className="ion-ios-people-outline nav-icons"></i>
                      <h5 className="nav-title">Partners</h5>
                    </div>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="nav-button nav-button-add" data-toggle="collapse" data-target="#navbarContent">
                    <div>
                      <i className="ion-model-s nav-icons"></i>
                      <h5 className="nav-title">Drivers</h5>
                    </div>
                  </button>
                </div>
                <div className="col-md-3">
                  <Link to="/login">
                    <button className="nav-button nav-button-login" data-toggle="collapse" data-target="#navbarContent">
                      <div>
                        <i className="ion-log-in nav-icons"></i>
                        <h5 className="nav-title">Login</h5>
                      </div>
                    </button>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/signup">
                    <button className="nav-button nav-button-login" data-toggle="collapse" data-target="#navbarContent">
                      <div>
                        <i className="ion-log-in nav-icons"></i>
                        <h5 className="nav-title">Signup</h5>
                      </div>
                    </button>
                  </Link>
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
                  <Link to="/login">
                    <button className={primaryClass}>
                      <div>
                        <h4>{primaryTitle}</h4>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-box">
                <div className="content-box">
                  <Link to="/signup">
                    <button className={secondaryClass}>
                      <div>
                        <h4>{secondaryTitle}</h4>
                      </div>
                    </button>
                  </Link>
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

function mapStateToProps(state) {
  return {
    route: state.route
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRoute: selectRoute }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
