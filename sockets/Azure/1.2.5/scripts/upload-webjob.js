var azure = require('machinepack-azure');

// Uploads a webjob to a given website, overwriting if it already exists.
azure.uploadWebjob(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
