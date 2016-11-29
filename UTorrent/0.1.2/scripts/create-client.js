var client = new uTorrent(inputs.host, inputs.port);
client.setCredentials(inputs.username, inputs.password);
return exits.success(client);