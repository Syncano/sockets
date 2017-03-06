var fs = require('machinepack-fs');

// List contents of a directory on the local filesystem.
fs.ls(ARGS).exec({

    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
