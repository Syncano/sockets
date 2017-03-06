var npm = require('machinepack-npm');

// Un-flatten the provided array back into a traditional NPM dependencies dictionary.
npm.unarrayifyDependencies(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
