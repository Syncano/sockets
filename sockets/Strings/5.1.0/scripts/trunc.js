var _ = require('lodash');

var opts = {
  length: inputs.maxLength,
  omission: inputs.omission
};
if (inputs.pretty){
  opts.separator = /[^0-9a-z]?\s+/i;
}

var truncated = _.trunc(inputs.string, opts);
return exits.success(truncated);