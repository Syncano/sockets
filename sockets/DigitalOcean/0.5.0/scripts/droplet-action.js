// Set up our parent-wrapper
 var Dropkit = require("dropkit");
// And add our token found in the API section of the Digital Ocean Control panel. 
 var v2 = new Dropkit(inputs.token);

 // Specify our arguments in JSON format. 
 v2.droplet.action(inputs.dropletID, inputs.action).then(function(droplet) {
      return exits.success(droplet);
 }).error(function(error) {
    return exits.notFound({
        description: "Not found.",
        statuscode: error.statuscode,
        response: error.res
    });
 });