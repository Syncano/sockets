var mandrill = require('machinepack-mandrill');

// Get all mandrill templates from one account and add them to another.
mandrill.migrateTemplates(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
