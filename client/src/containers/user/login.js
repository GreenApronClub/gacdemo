import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { clearMessage } from '../../actions/clear/clearAlert';
import { requestLogin } from '../../actions/login/actionLogin';
import * as types from '../../actions/actionTypes';
import './login.css';
import './media-queries-login.css';

class Login extends Component {
  componentWillUnmount() {
    const errorMessage = '';
    this.props.clearMessage(errorMessage, types.LOGIN_ERROR)
  }

  renderEmailField(field) {
    return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="ion-email"></i>
          </div>
        </div>
        <input id="email-input" className="form-control"
          type="email"
          maxLength="62" required placeholder="Email"
          {...field.input} />
      </div>
    </div>
    );
  }

  renderPasswordField(field) {
    return (
      <div className="form-group">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="ion-locked"></i>
            </div>
          </div>
          <input className="form-control"
            type="password" maxLength="62" required placeholder="Password"
            {...field.input} />
        </div>
     </div>
    );
  }

  onSubmit(values) {
    this.props.requestLogin(values, this.props);
  }

  render() {
    const { handleSubmit } = this.props;
    var passwordAlertClass = classNames({
      'validation-close': true,
      'validation-alert': this.props.errorMessage
    });
    return(
      <div className="form-content">
        <form className="login-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Email" name="email" component={this.renderEmailField} />
          <Field label="Password" name="password" component={this.renderPasswordField} />
          <div className={passwordAlertClass}><p>{this.props.errorMessage}</p></div>
          <div className="button-form">
            <button className="login-button" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.email || values.email.length < 6) {
    errors.email = "Please enter a valid email address";
  }
  if(!values.password) {
    errors.password = "Please enter your password";
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.session.errorMessage, isLoggedIn: state.session.isLoggedIn };
}

export default withRouter(reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, { requestLogin, clearMessage })(Login)
));
