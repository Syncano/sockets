var Machine = require('machine');

var Urls = require('machinepack-urls');

// Make sure this is a fully-qualified URL, and coerce it if necessary.
var url = Urls.resolve({url: inputs.url}).execSync();

Machine.build(require('./send-http-request')).configure({
  method: 'get',
  url: url
}).exec({
  error: exits.error,
  requestFailed: exits.requestFailed,
  badRequest: exits.badRequest,
  unauthorized: exits.unauthorized,
  forbidden: exits.forbidden,
  notFound: exits.notFound,
  serverError: exits.serverError,
  success: function (response){
    var html = response.body;
    return exits.success(html);
  }
});