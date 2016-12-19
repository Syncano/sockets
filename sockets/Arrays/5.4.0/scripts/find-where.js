var _ = require('lodash');
var foundItems = _.where(inputs.array, inputs.criteria);
return exits.success(foundItems);