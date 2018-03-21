import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
  render() {
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
                <button className="nav-button nav-button-logout" data-toggle="collapse" data-target="#navbarContent">
                  <div>
                    <i className="ion-log-in nav-icons"></i>
                    <h5 className="nav-title">Login</h5>
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
                    <button className="manage-button orders-inactive">
                      <div>
                        <h4>Login</h4>
                      </div>
                    </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-box">
                <div className="content-box">
                    <button className="manage-button manage-active">
                      <div>
                        <h4>Signup</h4>
                      </div>
                    </button>
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
};

export default NavBar;
