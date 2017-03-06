var localmachinepacks = require('machinepack-localmachinepacks');

// Parse machinepack data from the provided JSON string.
localmachinepacks.parseMachinepackMetadata(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notMachinepack: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
