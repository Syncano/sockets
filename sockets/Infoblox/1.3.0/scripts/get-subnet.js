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
if (inputs.optional) {
    inputs.optional = '&*' + inputs.optional;
} else {
    inputs.optional = '';
}
console.log(inputs.optional);
var formattedurl = 'https://' + inputs.host + '/wapi/v' + inputs.api + '/network?*' + inputs.exattr + ':' + operator + inputs.call + inputs.optional + '&_return_fields%2B=extattrs';

formattedurl = formattedurl.replace('\u0020', "%20");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";



Http.sendHttpRequest({
    baseUrl: formattedurl,
    url: '',
    method: 'get',
    headers: {
        "Authorization": "Basic " + new Buffer(inputs.username + ":" + inputs.password).toString("base64"),
    }
}).exec({
    success: function(result) {
        var obj = {};

        try {
            var data = JSON.parse(result.body);

        } catch (e) {
            return exits.error('An error occurred while parsing the reponse from Infoblox.');
        }

        return exits.success(data);
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