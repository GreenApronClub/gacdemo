import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
      firstname: '',
      lastname: ''
    }};
  }

  render() {
    return(
      <div className="form-content">
        <form className="signup-form">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div variant="info">
                  <div className="left"></div>
                </div>
              </div>
            </div>
          </div>
            <div className="container alert-box">
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-person-outline"></i>
                    </div>
                  </div>
                  <input className="form-control"
                    onChange={event => this.setState({form: { firstname: event.target.value }})}
                    type="text"
                    maxLength="62" required placeholder="Firstname"
                    value={this.state.term} />
                    <p>{this.state.form.firstname}</p>
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-person-outline"></i>
                    </div>
                  </div>
                  <input className="form-control"
                    onChange={event => this.setState({form: { lastname: event.target.value }})}
                    type="text" maxLength="62" required placeholder="Lastname"
                    value={this.state.form.lastname} />
                    <p>{this.state.form.lastname}</p>
                </div>
              </div>
            </div>
            <div className="button-form">
              <button className="signup-button" type="submit">Signup</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
