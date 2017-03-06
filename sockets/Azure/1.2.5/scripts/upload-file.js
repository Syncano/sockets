var azure = require('machinepack-azure');

// Uploads a file to a given website, overwriting if it already exists.
azure.uploadFile(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
