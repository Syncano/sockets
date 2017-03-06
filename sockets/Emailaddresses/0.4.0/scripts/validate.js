var emailaddresses = require('machinepack-emailaddresses');

// Determine whether or not the provided string is an email address.
emailaddresses.validate(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    invalid: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
