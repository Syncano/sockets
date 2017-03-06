var cloudflare = require('machinepack-cloudflare');

// Edit a DNS record for a zone
cloudflare.editDnsRecord(ARGS).exec({

    
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
