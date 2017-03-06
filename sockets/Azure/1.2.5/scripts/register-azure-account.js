var azure = require('machinepack-azure');

// Launches default browser to download default .publishsettings
azure.registerAzureAccount(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
