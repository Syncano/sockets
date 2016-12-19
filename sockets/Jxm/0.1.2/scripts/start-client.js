function (inputs, exits
    /**/
) {
    var server = require('jxm');



    var client = server.createClient(null, inputs.serviceName,
    "NUBISA-STANDARD-KEY-CHANGE-THIS", inputs.ipServer, 8000);

    client.on('connect', function(client) {
        client.Call("serverMethod", inputs.message, function(param, err) {
            if (err) {
                client.Close();
                return exits.serverCallFailed("Error while calling server's method. Code: ", err);

            } else {
                client.Close();
                return exits.success(param);
            }
        });
    });

    client.on('close', function(client) {
        console.log("Client disconnected");
    });

    client.on('error', function(client, err) {
        return exits.error("Error 1 : "+err);
    });

    client.Connect();


}