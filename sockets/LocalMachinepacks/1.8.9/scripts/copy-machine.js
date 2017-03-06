var localmachinepacks = require('machinepack-localmachinepacks');

// Copy a machine in a local pack and update the package.json file.
localmachinepacks.copyMachine(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
