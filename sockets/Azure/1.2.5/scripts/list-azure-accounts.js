var azure = require('machinepack-azure');

// Sets the deployment credntials of an Azure website
azure.listAzureAccounts(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
