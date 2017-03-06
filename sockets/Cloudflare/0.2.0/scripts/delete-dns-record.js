var cloudflare = require('machinepack-cloudflare');

// Delete a record for a domain
cloudflare.deleteDnsRecord(ARGS).exec({

    
    notAuthorized: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    invalidInput: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    apiLimit: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
