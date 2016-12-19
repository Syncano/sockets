// Set up our parent-wrapper
 var Dropkit = require("dropkit");
// And add our token found in the API section of the Digital Ocean Control panel. 
 var v2 = new Dropkit(inputs.token);

 // Specify our arguments in JSON format. 
 v2.droplets().then(function(droplet) {
      return exits.success(droplet);
 });