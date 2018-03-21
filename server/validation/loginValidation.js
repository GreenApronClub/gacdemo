var validator = require("validator");
var validatedLoginData = {};
var errorCode = '';

exports.validatedLoginData = validatedLoginData;

exports.validate = (email, password) => {
  if (validator.isEmail(email)) {
    validatedLoginData.email = email;
  } else {
    errorCode = 1000;
    return (false, errorCode);
  }
  if (validator.isAlphanumeric(password)) {
    validatedLoginData.password = password;
    return true
  } else {
    errorCode = 1500;
    return (false, errorCode);
  }
}
