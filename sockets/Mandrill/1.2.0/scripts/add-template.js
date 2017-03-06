var mandrill = require('machinepack-mandrill');

// Add a new email template to a Mandrill account.
mandrill.addTemplate(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
