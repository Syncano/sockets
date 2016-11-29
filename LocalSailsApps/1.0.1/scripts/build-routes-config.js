var _ = require('lodash');
var Javascript = require('machinepack-javascript');
var pathToRegexp = require('path-to-regexp');

// Sort the targets with the most dynamic ones at the bottom
inputs.targets.sort(function(routeA, routeB) {
  var routeParamsA = [];
  var regexpA = pathToRegexp(routeA.path, routeParamsA);
  var routeParamsB = [];
  var regexpB = pathToRegexp(routeB.path, routeParamsB);

  // If routeA has more dynamic route params than routeB, make it go last.
  if (routeParamsA.length > routeParamsB.length) {
    return 1;
  }
  else return -1;
});

var CRLF = '
';

var code = 'module.exports.routes = {' + CRLF;
code += _.reduce(inputs.targets, function(js, target) {
  js += '\'' + target.method + ' ' + target.path + '\':' +
    ' \'' + target.controller + '.' + target.action +
    '\',';
  js += CRLF;
  return js;
}, '');
code += CRLF + '};';

return exits.success(Javascript.beautify({code: code}).execSync());