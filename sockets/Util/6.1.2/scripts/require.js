var util = require('machinepack-util');

// Load (`require()`) a Node.js module located at the specified path and return whatever it exports.
util.require(ARGS).exec({

    // The data exported from a Node.js module (usually a function, a machinepack, or a constant.)
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    moduleNotFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    // A JavaScript Error with more information about why this `require()` failed.
    couldNotLoad: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
