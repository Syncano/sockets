var _ = require('lodash');

// Un-flatten dependencies.
var dependenciesDict = _.reduce(inputs.dependencies, function (memo, dependency){
  memo[dependency.name] = dependency.semverRange;
  return memo;
}, {});

return exits.success(dependenciesDict);