var local-treeline-projects = require('machinepack-local-treeline-projects');

// Write or overwrite the Treeline keychain/identity/config file.
local-treeline-projects.writeKeychain(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
