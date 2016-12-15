/**
 * Module Dependencies
 */
var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: '/baker?assertion='+inputs.url,
  baseUrl: 'http://backpack.openbadges.org',
  method: 'get',
  params: {},
  formData: false,
  headers: {},
}).exec({
  error: function (err){
    return exits.error(err);
  },
  badRequest: function (result){
    console.log(result);
    return exits.badAssertion(result);
  },
  success: function (result){
    return exits.success(result);
  }
});