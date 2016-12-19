var URL = require('url');
var QS = require('querystring');
var _ = require('underscore');
var Http = require('machinepack-http');
var operator;

if (inputs.strictSearch) {
    operator = '=';
} else {
    operator = '~=';
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


Http.sendHttpRequest({
    baseUrl: 'https://' + inputs.host + '/wapi/v' + inputs.api + '/record:a?name' + operator + inputs.call,
    url: '',
    method: 'get',
    headers: {
        "Authorization": "Basic " + new Buffer(inputs.username + ":" + inputs.password).toString("base64"),
    }
}).exec({
    // Returns an array
    success: function(result) {

        try {
            var responseBody = JSON.parse(result.body);
        } catch (e) {
            return exits.error('An error occurred while parsing the body.');
        }
        var listResult = [];
        var ipv4,
            dhcpConfigured;
        var parsed = _.each(responseBody, function(box) {
            _.each(box.ipv4addrs, function(addr) {
                ipv4 = addr.ipv4addr;
                dhcpConfigured = addr.configure_for_dhcp;
            });
            var boxObj = {
                name: box.name,
                ipv4: ipv4,
                dhcpEnabled: dhcpConfigured
            };

            listResult.push(boxObj);
        });
        return exits.success(listResult);

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