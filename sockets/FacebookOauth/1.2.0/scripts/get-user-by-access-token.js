var doJSONRequest = require('../lib/do-request');
var version = inputs.api_version || 'v2.5';
var url = '/' + version + '/me';
delete inputs.api_version;
// GET projects/ and send the api token as a header
doJSONRequest({
  method: 'get',
  url: url,
  data: inputs,
  headers: {},
}, function (err, responseBody) {
  if (err) { return exits.error(err); }
  return exits.success(responseBody);
});