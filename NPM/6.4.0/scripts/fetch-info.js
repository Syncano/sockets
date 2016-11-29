var util = require('util');
var _ = require('lodash');
var Http = require('machinepack-http');

if (inputs.packageName.match(/^@/)){
  return exits.error(new Error('This machine does not currently support scoped packages (e.g. @mikermcneil/foobar)'));
}

Http.sendHttpRequest({
  baseUrl: 'http://registry.npmjs.org',
  url: util.format('/%s', inputs.packageName)
}).exec({
  error: function (err) {
    return exits.error(err);
  },
  notFound: function (response) {
    return exits.packageNotFound(response);
  },
  success: function (response) {
    var parsed;
    try { parsed = JSON.parse(response.body); }
    catch (e) { return exits.couldNotParse(e); }

    return exits.success(parsed);
  }
});