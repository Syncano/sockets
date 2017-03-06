var localmachinepacks = require('machinepack-localmachinepacks');

// Prompt command-line user for details about a new machine being created.
localmachinepacks.promptAboutNewMachine(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
