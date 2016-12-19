var URL = require('url');
var Http = require('machinepack-http');

Http.sendHttpRequest({
    baseUrl: 'http://data.brreg.no/enhetsregisteret/enhet/' + inputs.organisasjonsnummer + '.json',
    url: '',
    method: 'get',
}).exec({
    // OK.
    success: function(result) {
        //console.log(result.body);

        try {
            var responseBody = JSON.parse(result.body);
        } catch (e) {
            return exits.error('An error occurred while parsing the body.');
        }

        return exits.success(responseBody);

    },
    // Non-2xx status code returned from server
    notOk: function(result) {

        try {
            if (result.status === 400) {
                return exits.unknownOrInvalidID("Invalid or unknown ID.");
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