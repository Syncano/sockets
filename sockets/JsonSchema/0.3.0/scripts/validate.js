var BaseValidator = require('jsonschema').Validator;
var validator = new BaseValidator();

var result = validator.validate(inputs.data, inputs.schema);
// => {
//   instance: 55,
//   schema: {
//     type: 'number'
//   },
//   propertyPath: 'instance',
//   errors: [],
//   throwError: undefined
// }

if (result.errors.length > 0) {
  return exits.invalid(result.errors);
}

return exits.success();