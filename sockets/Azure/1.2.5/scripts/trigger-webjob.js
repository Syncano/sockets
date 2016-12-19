var child_process = require('child_process');
var cliPath = require('path').resolve(__dirname, '../node_modules/azure-cli/bin/azure');
var _ = require('lodash');
var request = require('request');

var checkForError = function (response) {
  response = (response[0] && response[0].headers) ? response[0] : response;

  if (response.headers && response.headers['content-type'] && response.headers['content-type'] === 'text/html') {
    // 'Azure returned text/html (which it shouldn't), checking for errors
    if (response.body && response.body.indexOf('401 - Unauthorized') > -1) {
      return 'Invalid Credentials: The Azure Website rejected the given username or password.';
    }
  }

  return false;
}

var targetUrl = 'https://' + inputs.website + '.scm.azurewebsites.net/api/triggeredwebjobs/' + inputs.name + '/run';

request.post(targetUrl, {
  'auth': {
    'user': inputs.deploymentUser,
    'pass': inputs.deploymentPassword
  }
},
function (err, result) {
  if (err) {
    return exits.error(err);
  }

  errorCheck = checkForError(result);
  if (errorCheck) {
    return exits.error(errorCheck);
  }

  return exits.success(result);
});