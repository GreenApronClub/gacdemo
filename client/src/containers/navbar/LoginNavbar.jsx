import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginNavbar = () => (
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


export default LoginNavbar;
