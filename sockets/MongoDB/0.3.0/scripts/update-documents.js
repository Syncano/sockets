var mongodb = require('machinepack-mongodb');

// Modify existing documents in a collection.
mongodb.updateDocuments(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidQuery: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidUpdate: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotConnect: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidCollection: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
