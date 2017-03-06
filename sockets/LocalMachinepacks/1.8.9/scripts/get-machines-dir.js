var localmachinepacks = require('machinepack-localmachinepacks');

// Get the path to this machinepack's `machines/` directory.
localmachinepacks.getMachinesDir(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
