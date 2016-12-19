var URL = require('url');
var QS = require('querystring');
var _ = require('underscore');
var Http = require('machinepack-http');
var getNextNetwork = 'https://' + inputs.host + '/wapi/v' + inputs.api + '/network/' + inputs.ref + '?_function=next_available_ip';

console.log('url: ' + getNextNetwork);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


Http.sendHttpRequest({
    baseUrl: getNextNetwork,
    url: '',
    method: 'post',
    headers: {
        "Authorization": "Basic " + new Buffer(inputs.username + ":" + inputs.password).toString("base64"),
        "Content-Type": "application/json"
    },
    params: {
        "num": inputs.num
    }
}).exec({
    success: function(result) {
        var obj = {};

        try {
            var data = JSON.parse(result.body);
            obj.ips = data.ips;


        } catch (e) {
            return exits.error('An error occurred while parsing the reponse from Infoblox.');
        }

        return exits.success(obj);
        //Returns an object.

    },
    notOk: function(result) {

        try {
            if (result.status === 403) {
                return exits.wrongOrNoKey("Invalid or unprovided Username/Password. All calls must have Username/Password.");
            }
        } catch (e) {
            return exits.error(e);
        }

    },
    // An unexpected error occurred.
    error: function(err) {

        exits.error(err);
    },
});