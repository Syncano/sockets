var _ = require('lodash');

// If `inputs.floating` is false, ensure that the `start` and `end`
// inputs are rounded down to whole numbers to avoid inadvertently
// enabling floating-point results. (because by default, _.random()
// will understand floating-point `min` or `max`, indicating a license
// to make the result floating-point, which we've decided to make more
// explicit here.)
if (!inputs.floating) {
  inputs.min = Math.floor(inputs.min);
  inputs.max = Math.floor(inputs.max);
}

var result = _.random(inputs.min, inputs.max, inputs.floating);
return exits.success(result);