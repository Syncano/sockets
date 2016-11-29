// Import `lodash`.
var _ = require('lodash');

// If inputs are inconsistent with expectations, bail out w/ `error`.
if (inputs.min > inputs.max) {
  return exits.error(new Error('The configured value of the `min` input must be <= that of `max`.'));
}

// Because lodash's `inRange` is only inclusive on the bottom side,
// we'll make it inclusive here by adding an additional check:
if (_.inRange(inputs.value, inputs.min, inputs.max) || (inputs.max === inputs.value)){
  return exits.success(true);
}

// If the input value is outside the range, return `false` through the `success` exit.
return exits.success(false);