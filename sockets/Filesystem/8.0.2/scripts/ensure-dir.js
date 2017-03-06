var fs = require('machinepack-fs');

// Ensure that the directory exists. If the directory structure does not exist, it is created.
fs.ensureDir(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
