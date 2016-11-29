var _ = require('lodash');

// If a custom character index was NOT specified, just
// capitalize the string.
if (_.isUndefined(inputs.at)) {
  return exits.success(
    _.capitalize(inputs.string)
  );
}

// Otherwise, do some surgery:
return exits.success(
  inputs.string.slice(0, inputs.at) +
  inputs.string.slice(inputs.at, inputs.at+1).toUpperCase() +
  inputs.string.slice(inputs.at+1)
);