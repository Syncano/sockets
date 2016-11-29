var util = require('util');
var Http = require('machinepack-http');

// Look up machinepack, including list of machines
Http.sendHttpRequest({
  baseUrl: inputs.registry || 'http://www.node-machine.org',
  url: util.format('/%s', inputs.machinepack)
}).exec({
  error: exits.error,
  notFound: exits.notFound,
  success: function (resp){

    var machinepack;
    try {
      machinepack = JSON.parse(resp.body);
    }
    catch (e){
      return exits.error(e);
    }

    return exits.success(machinepack);
  }
});