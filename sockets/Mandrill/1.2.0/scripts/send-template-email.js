var mandrill = require('machinepack-mandrill');

// Send a templated email to the specified recipient.
mandrill.sendTemplateEmail(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
