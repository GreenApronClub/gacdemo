import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInNavbar = () => (
  <div>
    <nav className="navbar navbar-expand-xs navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="/green-apron-club-logo.png" alt="logo" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <div className="container nav-content">
          <div className="row no-gutters">
            <div className="col-4">
              <button className="nav-button nav-button-orders" data-toggle="collapse" data-target="#navbarContent">
                <div>
                  <i className="ion-ios-home nav-icons"></i>
                  <h5 className="nav-title-logged-in">Home</h5>
                </div>
              </button>
            </div>
            <div className="col-4 ml-auto">
              <button className="nav-button nav-button-logout" data-toggle="collapse" data-target="#navbarContent" onClick={() => this.props.logOut(this.props)}>
                <div>
                  <i className="ion-log-out nav-icons"></i>
                  <h5 className="nav-title-logged-in">Logout</h5>
                </div>
              </button>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-4">
              <NavLink to="/active-orders">
                <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                  <div>
                    <i className="ion-ios-box nav-icons"></i>
                    <h5 className="nav-title-logged-in">Active orders</h5>
                  </div>
                </button>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/manage-strains">
                <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                  <div>
                    <i className="ion-leaf nav-icons"></i>
                    <h5 className="nav-title-logged-in">Manage strains</h5>
                  </div>
                </button>
              </NavLink>
            </div>
            <div className="col-4">
              <NavLink to="/manage-strains/add">
                <button className="nav-button nav-button-manage" data-toggle="collapse" data-target="#navbarContent">
                  <div>
                    <i className="ion-plus nav-icons"></i>
                    <h5 className="nav-title-logged-in">Add strain</h5>
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
    <div className="d-block d-sm-none">
      <div className="row no-gutters">
        <div className="col-6">
          <div className="dash-box">
            <div className="content-box">
              <NavLink to="/active-orders" className="link-button" activeClassName="activePrimaryMobile">
                  <span className="secondary-nav-title">active orders</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="dash-box">
            <div className="content-box">
              <NavLink to="/manage-strains" className="link-button" activeClassName="activeSecondaryMobile">
                  <span className="secondary-nav-title">manage strains</span>
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

export default LoggedInNavbar;
