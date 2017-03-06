var local-treeline-projects = require('machinepack-local-treeline-projects');

// Install Treeline pack dependencies for the specified pack.
local-treeline-projects.installTreelineDeps(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
