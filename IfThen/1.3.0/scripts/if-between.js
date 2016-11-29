var _ = require('lodash');

// if inputs are inconsistent with expectations, bail out w/ `error`
if (inputs.min > inputs.max) {
  return exits.error(new Error('The configured value of the `min` input must be <= that of `max`.'));
}

// because lodash's `inRange` is only inclusive on the bottom side,
// we'll make it inclusive here by adding an additional check:
if (_.inRange(inputs.value, inputs.min, inputs.max) || (inputs.max === inputs.value)){
  return exits.success();
}
return exits.otherwise();