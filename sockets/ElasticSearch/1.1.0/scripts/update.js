var elasticsearch = require('machinepack-elasticsearch');

// Update (reindex) the document with the specified unique id.
elasticsearch.update(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    couldNotConnect: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    noSuchIndex: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    documentNotFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    created: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
