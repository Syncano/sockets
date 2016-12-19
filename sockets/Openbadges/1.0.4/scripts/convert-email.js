/**
 * Module Dependencies
 */
var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: '/displayer/convert/email',
  baseUrl: 'http://backpack.openbadges.org',
  method: 'post',
  params: {email:inputs.emailAddress},
  formData: false,
  headers: {},
}).exec({
  error: function (err){
    return exits.error(err);
  },
  notFound: function (result){
    return exits.mailNotFound(result);
  },
  success: function (result){
    return exits.success(result);
  }
});