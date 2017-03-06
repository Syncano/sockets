var npm = require('machinepack-npm');

// Flatten the provided depenencies dictionary into a homogeneous array of dictionaries.
npm.arrayifyDependencies(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
