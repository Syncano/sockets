var fs = require('machinepack-fs');

// Open a readable stream that will pump out the contents from a file on disk.
fs.readStream(ARGS).exec({

    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    isDirectory: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // A stream of data from the source file.
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
