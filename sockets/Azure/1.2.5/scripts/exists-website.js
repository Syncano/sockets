var azure = require('machinepack-azure');

// Detects if a website with a given name exists in the currently selected account
azure.existsWebsite(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
