var digitalocean = require('machinepack-digitalocean');

// Actions include: disable_backups, reboot, shutdown, power_on, restore, password_reset etc
digitalocean.dropletAction(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    notFound: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
