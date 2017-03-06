var reqres = require('machinepack-reqres');

// Upload any incoming files from the current request and write them to your desired destination.
reqres.uploadFiles(ARGS).exec({

    // An array of informational dictionaries, each describing one uploaded file.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
