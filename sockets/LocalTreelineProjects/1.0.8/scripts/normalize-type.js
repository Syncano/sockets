var local-treeline-projects = require('machinepack-local-treeline-projects');

// Validate+coerce the provided project type, or if unspecified, look in the package.json file and take a guess.
local-treeline-projects.normalizeType(ARGS).exec({

    
    unknownType: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
