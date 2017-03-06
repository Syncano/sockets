var machines = require('machinepack-machines');

// Run a machine which is already instantiated using the provided input values.
machines.runInstantiatedMachine(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unknownInput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    cantStringifyOutput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
