var localmachinepacks = require('machinepack-localmachinepacks');

// Initilize or rename a local pack by modifying its package.json file.
localmachinepacks.initializeMachinepack(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
