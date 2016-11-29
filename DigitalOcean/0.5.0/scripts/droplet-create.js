// Set up our parent-wrapper
 var Dropkit = require("dropkit");
// And add our token found in the API section of the Digital Ocean Control panel. 
 var v2 = new Dropkit(inputs.token);

 // Specify our arguments in JSON format. 
 v2.droplet.create({"name": inputs.name, "region": inputs.region, "size": inputs.size, "image": inputs.image, "ssh_keys": inputs.ssh_keys, "backups": inputs.backups, "ipv6": inputs.ipv6, "private_networking": inputs.private_networking, "user_data": inputs.user_data}).then(function(droplet) {
    console.log(droplet)
    return exits.success(droplet);

 }).error(function(error) {
    // I will re-visit this soon.
    // Digital Ocean sends out an error response without anything actually going wrong, but this route appears to give a successful creation. 
    console.log(error.statusCode);
    console.log(error.res);
    // DO API v2 returns both a status code and a response in JSON format.
    return exits.success(error.res);
  });