var _ = require('lodash');
var set = _.uniq(inputs.array, false, inputs.key);
return exits.success(set);