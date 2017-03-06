var salesforce-expanded = require('machinepack-salesforce-expanded');

// Update a salseforce object given Id and new values.
salesforce-expanded.updateObjectById(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidLogin: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidField: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    objectIdMissing: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    requiredFieldMissing: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
