var nodestore = require('machinepack-nodestore');

// Delete a key-value pair from the persistent data store. This is compatible with PhoneGap/Cordova
nodestore.deleteFromStorage(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
