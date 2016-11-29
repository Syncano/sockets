var Validator = require('validator');

if (Validator.isEmail(inputs.string)) {
  return exits.success();
}
return exits.invalid();