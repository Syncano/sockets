var protocol = 'http';
var baseUrl  = protocol + '://api.clickatell.com/' + protocol;
var smsUrl   = baseUrl + '/sendmsg';

var Http = require('machinepack-http');

Http.sendHttpRequest({
  baseUrl: smsUrl,
  url: '', 
  method: 'get',
  params: {
    user: inputs.user,
    password: inputs.password, 
    api_id: inputs.api_id,
    from: inputs.from,
    to: inputs.to,
    text: inputs.text
  },
  formData: true
}).exec({
  success: function(result) {

    try {
      var responseBody = JSON.parse(result.body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }

    return exits.success(responseBody.id);
  },
  forbidden: function (result){
    try {
      if (result.status === 403) {
        return exits.wrongOrNoKey("Invalid or unprovided API key. All calls must have a key.");
      }
    } catch (e) {
      return exits.error(e);
    } 
  },
  unauthorized: function (result){
    try {
      if (result.status === 401) {
        return exits.wrongOrNoCredentials("Invalid username or password");
      }
    } catch (e) {
      return exits.error(e);
    } 
  },
  error: function(err) {
    exits.error(err);
  },
});