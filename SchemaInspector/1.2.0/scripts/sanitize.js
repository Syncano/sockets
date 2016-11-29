var inspector = require('schema-inspector');
var schema = { type: "object", properties: { data: inputs.schema } };
inspector.sanitize(schema, inputs, function (err, result) {
  if (err) {
    return exits.error(err);
  }
  // inputs.data updated
  return exits.success(inputs.data);
});