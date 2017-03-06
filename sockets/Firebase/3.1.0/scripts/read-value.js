var firebase = require('machinepack-firebase');

// Read data from a specific firebase location, such as "/users/".
firebase.readValue(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
