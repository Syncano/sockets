var sailsgulpify = require('machinepack-sailsgulpify');

// Adds gulp dependencies to the projects packasge.json
sailsgulpify.installGulpDependencies(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalidSemVer: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
