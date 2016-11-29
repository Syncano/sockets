var _ = require('lodash');
var foundItem = _.find(inputs.array, inputs.criteria);
if (!foundItem) {
  return exits.notFound();
}
return exits.success(foundItem);