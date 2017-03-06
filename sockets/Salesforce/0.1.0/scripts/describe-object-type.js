var salesforce-expanded = require('machinepack-salesforce-expanded');

// Describe a salseforce object type. Returns all the fields and values for type.
salesforce-expanded.describeObjectType(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidLogin: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
