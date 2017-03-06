var localmachinepacks = require('machinepack-localmachinepacks');

// Generate JSON test files for any machines in this local machinepack which don't already have them.
localmachinepacks.scaffoldTests(ARGS).exec({

    
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
