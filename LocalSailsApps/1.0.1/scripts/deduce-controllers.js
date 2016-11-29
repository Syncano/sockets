var _ = require('lodash');
var Strings = require('machinepack-strings');

var targets = _.reduce(inputs.routes, function(memo, route) {

  // Lowercase method
  route.method = route.method.toLowerCase();

  // Get pieces of path string
  var pathParts = route.path.split('/');

  // Determine 'identity' for our controller by examining the path
  // (home route is handled by a special `Home$Controller`)
  var identity = pathParts[1] || 'home$';

  // If identity is actually a route param, use a special `Slug$Controller`
  if (identity[0] === ':') identity = 'slug$';

  // Determine `action`, starting with the HTTP method
  var action = '';
  if (pathParts.length == 2) {
    switch (route.method) {
      case 'get':
        action += 'find';
        break;
      case 'post':
        action += 'create';
        break;
      case 'put':
        action += 'update';
        break;
      case 'delete':
        action += 'destroy';
        break;
      default:
        action += '_' + route.method;
    }
  } else {
    action = pathParts.slice(2).join('_').replace(':', '$').replace(/[^a-zA-Z0-9_$]/g, '');
  }

  // If another route shares this path, prefix the action name with the method
  if (_.where(inputs.routes, {
      path: route.path
    }).length > 1) {
    action = route.method + '_' + action;
  }

  // Ensure there are never any conflicts for action names
  // (this will add a number to the end if a conflict occurs)
  action = Strings.ensureUniq({
    string: action,
    existingStrings: _.pluck(memo, 'action')
  }).execSync();

  memo.push({
    method: route.method,
    path: route.path,

    // Capitalize identity and add `Controller` to the end to get the controllerName
    controller: _.capitalize(identity) + 'Controller',

    action: action,

    responses: route.responses,
    files: route.files,
    machine: route.machine

  });
  return memo;
}, []);

// Group the actions by controller
var controllers = _.groupBy(targets, 'controller');

// Turn the single grouped object (indexed by controller name) into an array
// with one item per controller
controllers = _.map(controllers, function(controller, controllerName) {
  return {
    controller: controllerName,
    actions: controller
  };
});

return exits.success(controllers);