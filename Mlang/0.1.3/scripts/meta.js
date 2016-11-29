var _ = require('lodash');

/**
 * Module Dependencies
 */

var program = inputs.program;

var dependencies = [];
var methods = [];
var variables = {};

var methodForKey = function(key) {
  if (key.length > 1 && key[0] === "$") {
    return key.substr(1);
  } else {
    return null;
  }
};
var countDependencies = function(obj) {
  return _.forOwn(obj, function (value, key) {
    if (typeof value === "object") {
      // Count all current
      var method = methodForKey(key);
      if (method) {
        methods.push(method);
        var dep = method.split('.')[0];
        dependencies.push(dep);
      }
      // Recurse
      return countDependencies(value);
    }
  });
};
// Run!
countDependencies(program);
// Uniquify
dependencies = _.uniq(dependencies);
methods = _.uniq(methods);
// Return an object containing myLength and the secretCode
return exits.success({
  dependencies: dependencies,
  methods: methods,
  variables: variables
});