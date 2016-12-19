var _ = require('lodash');

var foundAtIndex;
_.each(inputs.array, function (item, i){
  if (!_.isUndefined(foundAtIndex)) {
    return;
  }
  if (_.isEqual(item, inputs.item)) {
    foundAtIndex = i;
  }
});
if (_.isUndefined(foundAtIndex)) {
  return exits.notFound();
}
return exits.success(foundAtIndex);