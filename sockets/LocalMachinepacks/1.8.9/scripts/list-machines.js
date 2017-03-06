var localmachinepacks = require('machinepack-localmachinepacks');

// List the machines in a local pack.
localmachinepacks.listMachines(ARGS).exec({

    
    notMachinepack: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
