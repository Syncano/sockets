var fs = require('machinepack-fs');

// Completely remove a file or directory (like rm -rf).
fs.rmrf(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
