var mandrill = require('machinepack-mandrill');

// Delete all mandrill templates from an account.
mandrill.deleteAllTemplates(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
