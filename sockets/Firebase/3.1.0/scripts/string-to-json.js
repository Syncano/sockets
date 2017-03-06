var firebase = require('machinepack-firebase');

// Firebase writes data as a JSON object. You can convert your JSON-format string to a JSON object with this machine.
firebase.stringToJson(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    parseFailure: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
