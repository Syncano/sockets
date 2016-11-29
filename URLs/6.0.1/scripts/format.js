// Import `lodash`.
var _ = require('lodash');

// Use `replace` with a custom replacer function to substitute actual param values for tokens.
var result = inputs.urlTemplate.replace(/(\:[^\/\:\.]+)/g, function ($all, $1){
  // Get the name of the param that this token represents.
  var routeParamName = $1.replace(/^\:/, '');
  // If we don't have a value for this param in the `data` input, replace it with an empty string.
  if (_.isUndefined(inputs.data[routeParamName]) || _.isNull(inputs.data[routeParamName])) {
    return '';
  }
  // Otherwise replace the token with the value for this param in the `data` input.
  return inputs.data[routeParamName];
});

// Return the result through the `success` exit.
return exits.success(result);