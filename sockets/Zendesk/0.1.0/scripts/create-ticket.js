var zendesk = require('machinepack-zendesk');

// Log a hello message with a generated secret code and other information
zendesk.createTicket(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
