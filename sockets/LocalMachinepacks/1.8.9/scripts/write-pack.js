var localmachinepacks = require('machinepack-localmachinepacks');

// Write a machinepack to disk at the specified path using the given metadata.
localmachinepacks.writePack(ARGS).exec({

    
    alreadyExists: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
