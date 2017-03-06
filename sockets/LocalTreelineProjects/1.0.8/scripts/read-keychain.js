var local-treeline-projects = require('machinepack-local-treeline-projects');

// Read data from the Treeline identity/config file.
local-treeline-projects.readKeychain(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    doesNotExist: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotParse: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
