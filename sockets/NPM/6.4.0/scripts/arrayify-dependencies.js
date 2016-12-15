var _ = require('lodash');

// Flatten dependencies.
var flattenedDeps = _.reduce(inputs.dependencies, function (memo, semverRange, name){
  memo.push({
    name: name,
    semverRange: semverRange
  });
  return memo;
}, []);

return exits.success(flattenedDeps);