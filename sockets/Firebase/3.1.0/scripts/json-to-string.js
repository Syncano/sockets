var firebase = require('machinepack-firebase');

// Firebase reads data as a JSON object. You can convert this to a string with this machine.
firebase.jsonToString(ARGS).exec({

    
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
