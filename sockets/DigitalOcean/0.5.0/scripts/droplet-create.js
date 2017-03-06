var digitalocean = require('machinepack-digitalocean');

// Create a DigitalOcean droplet.
digitalocean.dropletCreate(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
