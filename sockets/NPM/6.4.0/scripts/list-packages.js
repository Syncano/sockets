var npm = require('machinepack-npm');

// List packages in the public npm registry whose keywords match the specified search query.
npm.listPackages(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
