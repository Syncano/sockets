var digitalocean = require('machinepack-digitalocean');

// List information on all droplets in your DigitalOcean account.
digitalocean.dropletList(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
