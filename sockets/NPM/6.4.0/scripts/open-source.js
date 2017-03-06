var npm = require('machinepack-npm');

// Open up public access to a package published on NPM.
npm.openSource(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
