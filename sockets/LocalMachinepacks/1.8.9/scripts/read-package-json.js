var localmachinepacks = require('machinepack-localmachinepacks');

// Read and parse the package.json file of a local pack in the specified directory.
localmachinepacks.readPackageJson(ARGS).exec({

    
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
