var ssh = require('machinepack-ssh');

// Run a command on a remote server via SSH. Requires Host, Username, Password and ommand.
ssh.runSshCommand(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
