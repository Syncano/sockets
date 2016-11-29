var Http = require('machinepack-http');

// Look up list of machinepacks
Http.sendHttpRequest({
  baseUrl: inputs.registry,
  url: '/machinepacks'
}).exec({
  error: exits.error,
  success: function (resp){

    var machinepacks;
    try {
      machinepacks = JSON.parse(resp.body);
    }
    catch (e){
      return exits.error(e);
    }

    return exits.success(machinepacks);
  }
});