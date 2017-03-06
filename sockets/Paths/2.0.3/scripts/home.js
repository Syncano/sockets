var paths = require('machinepack-paths');

// Get the absolute path to your home directory on this computer (OS-agnostic)
paths.home(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
