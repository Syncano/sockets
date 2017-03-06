var infoblox = require('machinepack-infoblox');

// Get the next available IP-address(es) from a subnet
infoblox.getNextAvailableIp(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    wrongOrNoUserPassword: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
