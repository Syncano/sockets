var mongodb = require('machinepack-mongodb');

// List documents in this Mongo collection which match the specified criteria.
mongodb.listDocuments(ARGS).exec({

    
    error: function (response) {
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
