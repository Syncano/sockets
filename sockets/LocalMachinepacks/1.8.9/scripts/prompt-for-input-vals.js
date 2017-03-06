var localmachinepacks = require('machinepack-localmachinepacks');

// Prompt command-line user for the specified machine input values.
localmachinepacks.promptForInputVals(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
