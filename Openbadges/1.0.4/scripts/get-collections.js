/**
 * Module Dependencies
 */
var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: '/displayer/'+inputs.uid+'/groups.json',
  baseUrl: 'http://backpack.openbadges.org',
  method: 'get',
  params: {},
  formData: false,
  headers: {},
}).exec({
  error: function (err){
    return exits.error(err);
  },
  notFound: function (result){
    console.log(result);
    return exits.collesionsNotFound(result);
  },
  success: function (result){
    return exits.success(result);
  }
});