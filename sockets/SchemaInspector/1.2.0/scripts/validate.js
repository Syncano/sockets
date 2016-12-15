var inspector = require('schema-inspector');
inspector.validate(inputs.schema, inputs.data, function (err, result) {
  if (err) {
    return exits.error(err);
  }
  if (!result.valid) {
    return exits.invalid(result.format());
  }
  return exits.success(inputs.data);
});