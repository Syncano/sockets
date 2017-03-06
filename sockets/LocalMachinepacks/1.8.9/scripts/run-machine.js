var localmachinepacks = require('machinepack-localmachinepacks');

// Run a machine in the specified local pack using the provided input values.
localmachinepacks.runMachine(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    unknownInput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidMachine: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    cantStringifyOutput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
