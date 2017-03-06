var nodestore = require('machinepack-nodestore');

// Save a key-value pair in string format to the persistent data store. This is compatible with PhoneGap/Cordova
nodestore.saveJsonToStorage(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
