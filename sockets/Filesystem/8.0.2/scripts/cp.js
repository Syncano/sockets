var fs = require('machinepack-fs');

// Copy file or directory located at source path to the destination path (overwriting an existing file at the destination path, if there is one).
fs.cp(ARGS).exec({

    
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
