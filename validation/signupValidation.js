var validator = require("validator");
var validatedSignupData = {};
var errorCode = '';

exports.validatedSignupData = validatedSignupData;

exports.validate = (email, firstName, lastName, password, address, address2, city, zipCode, phoneNumber, ageVerification) => {
  if (validator.isEmail(email)) {
    validatedSignupData.email = email;
  } else {
    errorCode = 1000;
    return (false, errorCode);
  }
  if (validator.isAlpha(firstName)) {
    validatedSignupData.firstName = firstName;
  } else {
    errorCode = 1100;
    return (false, errorCode);
  }
  if (validator.isAlpha(lastName)) {
    validatedSignupData.lastName = lastName;
  } else {
    errorCode = 1200;
    return (false, errorCode);
  }
  if (validator.isAlphanumeric(password)) {
    validatedSignupData.password = password;
  } else {
    errorCode = 1300;
    return (false, errorCode);
  }
  if (validator.isBoolean(ageVerification)) {
    validatedSignupData.ageVerification = ageVerification;
    return true
  } else {
    errorCode = 1400;
    return (false, errorCode);
  }
}
