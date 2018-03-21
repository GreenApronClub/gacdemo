import React, { Component } from 'react';
import './signup.css';

class SignUp extends Component {
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
                    maxlength="62" required placeholder="Firstname"
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
                    type="text" maxlength="62" required placeholder="Lastname"
                    value={this.state.form.lastname} />
                    <p>{this.state.form.lastname}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-email-outline"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" size="64" maxlength="64" required placeholder="Email" />
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-locked-outline"></i>
                    </div>
                  </div>
                  <input className="form-control" type="password" maxlength="62" required placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-home-outline"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" maxlength="62" placeholder="Address" />
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-ios-home-outline"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" maxlength="62" placeholder="Address 2" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      #
                    </div>
                  </div>
                  <input className="form-control" type="number" maxlength="62" placeholder="Phone number" />
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-map"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" maxlength="62" placeholder="Country" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-map"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" maxlength="62"  placeholder="City" />
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-map"></i>
                    </div>
                  </div>
                  <input className="form-control" type="text" maxlength="62" placeholder="Zip code" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 ml-5">
                <div className="input-group">
                  <div className="form-check">
                    <label className="form-check-label age-verification" for="age-checkbox">
                    <input id="age-checkbox" className="form-check-input" type="checkbox" value="" />
                      I am 21 years of age or older
                    </label>
                  </div>
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

export default SignUp;
