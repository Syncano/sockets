var local-treeline-projects = require('machinepack-local-treeline-projects');

// Apply a changelog of remote changes from treeline.io to the local machinepack.
local-treeline-projects.applyPackChangelog(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
