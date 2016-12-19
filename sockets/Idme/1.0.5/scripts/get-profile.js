var Http = require('machinepack-http');

Http.sendHttpRequest({

  baseUrl:'https://api.id.me',
  url: '/api/public/v2/'+inputs.end_point+'.json',
  method:'get',
  params:{
    access_token : inputs.access_token
  },
  headers: {
    'Accept':'application/json'
  }

}).exec({

  error: function (err){
    return exits.error(err);
  },
  // 404 status code returned from server
  notFound: function (result){
    return exits.error(result);
  },
  // 400 status code returned from server
  badRequest: function (result){
    return exits.error(JSON.parse(result.body).error_description);
  },
  // 403 status code returned from server
  forbidden: function (result){
    return exits.error(result);
  },
  // 401 status code returned from server
  unauthorized: function (result){
    return exits.error(JSON.parse(result.body).message);
  },
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: function (result){
    return exits.error(result);
  },
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: function (){
    return exits.error('Unexpected connection error: could not send or receive HTTP request.');
  },
  success: function(result){
    return exits.success(JSON.parse(result.body));
  }
});