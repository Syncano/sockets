var local-treeline-projects = require('machinepack-local-treeline-projects');

// Apply a changelog of remote changes from treeline.io to the local project.
local-treeline-projects.syncRemoteChanges(ARGS).exec({

    
    couldNotSync: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotFlush: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
