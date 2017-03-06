var salesforce-expanded = require('machinepack-salesforce-expanded');

// Create a salseforce object given object properties. Returns new object Id
salesforce-expanded.createObject(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidLogin: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    requiredFieldMissing: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
