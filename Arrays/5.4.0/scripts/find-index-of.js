var _ = require('lodash');
var item = _.find(inputs.array, inputs.criteria);
if (!item) {
  return exits.notFound();
}
var index = _.indexOf(inputs.array, item);
if (index === -1 ) {
  return exits.notFound();
}
return exits.success(index);