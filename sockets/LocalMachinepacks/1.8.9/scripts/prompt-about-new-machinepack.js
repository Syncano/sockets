var localmachinepacks = require('machinepack-localmachinepacks');

// Prompt command-line user for new machinepack details.
localmachinepacks.promptAboutNewMachinepack(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    cancelled: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
