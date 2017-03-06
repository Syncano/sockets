var localmachinepacks = require('machinepack-localmachinepacks');

// Lookup top-level metadata, dehydrate the machine definitions, and compute a hash for the public API of this machinepack.
localmachinepacks.getSignature(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
