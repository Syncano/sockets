// Module dependencies
var util = require('util');
var request = require('request');
var _ = require('lodash');
var Urls = require('machinepack-urls');


// Default to a GET request
inputs.method = (inputs.method||'get').toLowerCase();

if (inputs.baseUrl) {
  // Strip trailing slash(es)
  inputs.baseUrl = inputs.baseUrl.replace(/\/*$/, '');

  // and ensure this is a fully qualified URL w/ the "http://" part
  // (if not, attempt to coerce)
  inputs.baseUrl = Urls.resolve({url:inputs.baseUrl}).execSync();

  // If a `baseUrl` was provided then `url` should just be the path part
  // of the URL, so it should start w/ a leading slash
  // (if not, attempt to coerce)
  inputs.url = inputs.url.replace(/^([^\/])/,'/$1');
}
// If no baseUrl was specified:
else {
  // Coerce it to an empty string
  inputs.baseUrl = '';

  // Then ensure `url` is fully qualified (w/ the "http://" and hostname part)
  inputs.url = Urls.resolve({url:inputs.url}).execSync();
}


// Send request
request((function build_options_for_mikeal_request(){

  if (inputs.method === 'get') {
    return {
      method: 'GET',
      url: inputs.baseUrl + inputs.url,
      qs: inputs.params,
      json: true,
      headers: inputs.headers
    };
  }

  var options = {
    method: inputs.method.toUpperCase(),
    url: inputs.baseUrl + inputs.url,
    headers: inputs.headers||{}
  };

  if(inputs.formData) {
    options.form = inputs.params || {};
  } else {
    options.json = inputs.body || inputs.params;
  }

  return options;
})(), function gotResponse(err, response, httpBody) {

  // Wat (disconnected from internet maybe?)
  if (err) {
    return exits.requestFailed(err);
  }

  // Non 2xx status code
  if (response.statusCode >= 300 || response.statusCode < 200) {

    var exitToCall;
    switch (response.statusCode) {
      case 400: exitToCall = exits.badRequest; break;
      case 401: exitToCall = exits.unauthorized; break;
      case 403: exitToCall = exits.forbidden; break;
      case 404: exitToCall = exits.notFound; break;
      default:
        if (response.statusCode > 499 && response.statusCode < 600) {
          exitToCall = exits.serverError;
        }
        else exitToCall = exits.error;
    }
    return exitToCall({
      status: response.statusCode,
      headers: stringifySafe(response.headers),
      body: stringifySafe(httpBody)
    });
  }

  // Success, send back the body
  return exits.success({
    status: response.statusCode,
    headers: stringifySafe(response.headers),
    body: stringifySafe(httpBody)
  });
});


// Helper functions
function parseObject(objAsJsonStr) {
  try {
    return JSON.parse(objAsJsonStr);
  }
  catch (e) {
    return {};
  }
}

function stringifySafe(serializableThing) {
  try {
    return JSON.stringify(serializableThing);
  }
  catch (e) {
    return '';
  }
}