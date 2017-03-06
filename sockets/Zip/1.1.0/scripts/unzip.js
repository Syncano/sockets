var zip = require('machinepack-zip');

// Unzip the specified .zip file and write the decompressed files/directories as contents of the specified destination directory.
zip.unzip(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
