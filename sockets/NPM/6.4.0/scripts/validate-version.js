var npm = require('machinepack-npm');

// Validate (and potentially coerce) the specified string, verifying that it is compatible for use as an NPM version string.
npm.validateVersion(ARGS).exec({

    // The validated version string (which might also have been coerced a bit).
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    isEmpty: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    tooLong: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidSemanticVersion: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notStrictlyValid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
