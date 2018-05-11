var validator = require("validator");
var validatedstrainData = {};
var validationstrainError = '';

exports.validatedstrainData = validatedstrainData;

exports.validate = (price) => {
  if (validator.isNumeric(price)) {
    validatedstrainData.price = price;
    return true
  } else {
    validationstrainError = 'Wrong price format';
    return (false, validationstrainError);
  }
}
