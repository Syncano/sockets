var localmachinepacks = require('machinepack-localmachinepacks');

// Add a test for a machine in a machinepack on the local disk.
localmachinepacks.addTest(ARGS).exec({

    
    corrupted: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
