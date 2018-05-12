import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import requestSignUp from '../../helpers/requestSignUp.js';
import { signUpSuccess, signUpError, clearSignUpErrorMessage } from '../../actions/sign_up/actionSignUp.js';
import './signup.css';

class SignUp extends Component {
  renderFirstnameField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" required placeholder="Firstname"
        {...field.input} />
    );
  }
  renderLastnameField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" required placeholder="Lastname"
        {...field.input} />
    );
  }
  renderEmailField(field) {
    return (
      <input className="form-control"
        type="text" size="64" maxLength="64" required placeholder="Email"
        {...field.input} />
    );
  }
  renderPasswordField(field) {
    return (
      <input className="form-control"
        type="password" maxLength="62" required placeholder="Password"
        {...field.input} />
    );
  }
  renderAddressField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" placeholder="Address"
        {...field.input} />
    );
  }
  renderAddress2Field(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" placeholder="Address 2"
        {...field.input} />
    );
  }
  renderPhonenumberField(field) {
    return (
      <input className="form-control"
        type="number" maxLength="62" placeholder="Phone number"
        {...field.input} />
    );
  }
  renderCountryField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" placeholder="Country"
        {...field.input} />
    );
  }
  renderCityField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62"  placeholder="City"
        {...field.input} />
    );
  }
  renderZipcodeField(field) {
    return (
      <input className="form-control"
        type="text" maxLength="62" placeholder="Zip code"
        {...field.input} />
    );
  }
  renderAgeVerificationCheckField(field) {
    return (
      <div className="form-check">
        <label className="form-check-label age-verification" htmlFor="age-checkbox">
        <input id="age-checkbox" className="form-check-input" type="checkbox" {...field.input} />
          I am 21 years of age or older
        </label>
      </div>
    );
  }

  onSubmit(values) {
    var history = this.props.history;
    requestSignUp(values)
      .then(response => {
        if(response.data) {
          this.props.signUpSuccess(response.data.success);
          history.push('/login');
        }
      })
      .catch(error => {
        if(error.response.data)
          this.props.signUpError(error.response.data.error);
      })
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div variant="info">
                  <div className="left"></div>
                </div>
              </div>
            </div>
          </div>
            <div className="container alert-box">
            <div className="row">
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-person"></i>
                    </div>
                  </div>
                  <Field name="firstname" component={this.renderFirstnameField} />
                </div>
              </div>
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-person"></i>
                    </div>
                  </div>
                  <Field name="lastname" component={this.renderLastnameField} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-mail"></i>
                    </div>
                  </div>
                  <Field name="email" component={this.renderEmailField} />
                </div>
              </div>
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-lock"></i>
                    </div>
                  </div>
                  <Field name="password" component={this.renderPasswordField} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-home"></i>
                    </div>
                  </div>
                  <Field name="address" component={this.renderAddressField} />
                </div>
              </div>
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-home"></i>
                    </div>
                  </div>
                  <Field name="address 2" component={this.renderAddress2Field} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      #
                    </div>
                  </div>
                  <Field name="Phonenumber" component={this.renderPhonenumberField} />
                </div>
              </div>
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-map"></i>
                    </div>
                  </div>
                  <Field name="Country" component={this.renderCountryField} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-map"></i>
                    </div>
                  </div>
                  <Field name="City" component={this.renderCityField} />
                </div>
              </div>
              <div className="col-sm-6 form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="ion-md-map"></i>
                    </div>
                  </div>
                  <Field name="Zipcode" component={this.renderZipcodeField} />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-4 ml-5">
                <div className="input-group">
                    <Field name="ageverification" component={this.renderAgeVerificationCheckField} />
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

function validate(values) {
  const errors = {};

  if(!values.email || values.email.length < 3) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    signUpErrorData: state.signUp.error
  };
}

SignUp = withRouter(reduxForm({
  validate,
  form: 'SignUpForm',
})(SignUp));

SignUp = connect(mapStateToProps, {
  signUpSuccess,
  signUpError,
  clearSignUpErrorMessage })(SignUp);

export default SignUp;
