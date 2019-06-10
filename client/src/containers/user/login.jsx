// NODE_MODULES
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// MATERIAL UI
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// ACTION CREATORS
import { loginActions, alertActions } from '../../actions';
import * as types from '../../actions/actionTypes';
import './media-queries-login.css';
import '../css/login.css';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: '#fff',
  },
};

class Login extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    clearMessage: PropTypes.func.isRequired,
    requestLogin: PropTypes.func.isRequired,
    signUpSuccess: PropTypes.object.isRequired,
    errorMessage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  componentWillUnmount() {
    const { clearMessage } = this.props;
    const errorMessage = '';
    const success = { success: {} };
    clearMessage(errorMessage, types.LOGIN_ERROR);
    clearMessage(success, types.SIGN_UP_SUCCESS);
  }

  renderEmailField = field => (
    // <div className="form-group">
    //   <div className="input-group">
    //     <div className="input-group-prepend">
    //       <div className="input-group-text">
    //         <i className="ion-email" />
    //       </div>
    //     </div>
    //     <input
    //       id="email-input"
    //       className="form-control"
    //       type="email"
    //       maxLength="62"
    //       required
    //       placeholder="Email"
    //       {...field.input}
    //     />
    //   </div>
    // </div>
    <TextField
      required
      autoFocus
      // className={classes.margin}
      id="input-with-icon-textfield"
      label="User"
      name="user"
      {...field.input}
      // value={user}
      // onChange={this.handleUserInput}
    />
  );

  renderPasswordField = field => (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="ion-locked" />
          </div>
        </div>
        <input
          className="form-control"
          type="password"
          maxLength="62"
          required
          placeholder="Password"
          {...field.input}
        />
      </div>
    </div>
  );

  onSubmit = (values) => {
    const { requestLogin } = this.props;
    requestLogin(values, this.props);
  }

  render() {
    const {
      classes,
      handleSubmit,
      signUpSuccess,
      errorMessage,
      clearMessage,
    } = this.props;
    const { message } = signUpSuccess;
    const success = { success: {} };
    const passwordAlertClass = classNames({
      'validation-close': true,
      'validation-alert': errorMessage,
    });
    const customAlert = classNames({
      'custom-alert': message,
      'custom-alert-close': true,
    });
    return (
      <div className="form-content">
        <form className="login-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Card className={classes.card}>
            <div className={customAlert}>
              <p>{message}</p>
              <button type="button" className="custom-close" onClick={() => clearMessage(success, types.SIGN_UP_SUCCESS)}>
                <span aria-hidden="true"><i className="ion-ios-checkmark" /></span>
              </button>
            </div>
            <Field label="Email" name="email" component={this.renderEmailField} />
            <Field label="Password" name="password" component={this.renderPasswordField} />
            <div className={passwordAlertClass}><p>{errorMessage}</p></div>
            <div className="button-form">
              <button className="login-button" type="submit">Login</button>
            </div>
          </Card>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.email || values.email.length < 6) { errors.email = 'Please enter a valid email address'; }
  if (!values.password) { errors.password = 'Please enter your password'; }
  return errors;
};

const mapStateToProps = state => ({
  errorMessage: state.session.errorMessage,
  isLoggedIn: state.session.isLoggedIn,
  signUpSuccess: state.signUp.success,
});

const mapDispatchToProps = {
  requestLogin: loginActions.requestLogin,
  clearMessage: alertActions.clearMessage,
};

export default withRouter(reduxForm({
  validate,
  form: 'LoginForm',
})(
  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login)),
));
