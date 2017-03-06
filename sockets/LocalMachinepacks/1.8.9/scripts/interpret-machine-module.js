var localmachinepacks = require('machinepack-localmachinepacks');

// Interpret a machine from a Node.js module string into a JSON string.
localmachinepacks.interpretMachineModule(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noExits: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    tookTooLong: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
