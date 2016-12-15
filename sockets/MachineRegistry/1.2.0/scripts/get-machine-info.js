var util = require('util');
var Http = require('machinepack-http');

var registryBaseUrl = inputs.registry || 'http://www.node-machine.org';

// Look up machinepack, including list of machines
Http.sendHttpRequest({
  baseUrl: registryBaseUrl,
  url: util.format('/%s/%s', inputs.machinepack, inputs.machine)
}).exec({
  error: exits.error,
  notFound: exits.notFound,
  success: function (resp){

    var machine;
    try {
      machine = JSON.parse(resp.body);
    }
    catch (e){
      return exits.error(e);
    }

    // Expose raw JSON string in case additional information needs to be parsed.
    machine.rawJsonStr = resp.body;

    return exits.success(machine);
  }
});