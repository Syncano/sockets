/**
 * Module Dependencies
 */
var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: '/displayer/'+inputs.uid+'/group/'+inputs.gid+'.json',
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
    return exits.badgesNotFound(result);
  },
  success: function (result){
    return exits.success(result);
  }
});