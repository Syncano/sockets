var azure = require('machinepack-azure');

// Gets the latest info about a webjob on a given website.
azure.infoWebjob(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
