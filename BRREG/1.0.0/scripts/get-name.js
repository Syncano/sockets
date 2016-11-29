var URL = require('url');
var Http = require('machinepack-http');

Http.sendHttpRequest({
    baseUrl: 'http://data.brreg.no/enhetsregisteret/enhet.json?page=0&size=30&$filter=startswith(navn,' + "'" + inputs.name + "'" + ')',
    url: '',
    method: 'get',
}).exec({
    // OK.
    success: function(result) {
        //console.log(result);

        try {
            var responseBody = JSON.parse(result.body);
            var resultParsed = responseBody.data;
            //console.log(responseBody.data);
        } catch (e) {
            return exits.error('An error occurred while parsing the body.');
        }
        console.log(resultParsed);
        return exits.success(resultParsed);

    },
    // Non-2xx status code returned from server
    notOk: function(result) {

        try {
            if (result.status === 400) {
                return exits.unknownOrInvalidCompany("Invalid or unknown company.");
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