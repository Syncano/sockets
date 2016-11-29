function fn(inputs, exits) {

    /**
     * Make a GET request to the forecast.io API and return the result
     * @param lat
     * @param lng
     * @param {string} queryString
     * @returns {Object}
     */
    function getCurrentForecast(lat, lng, queryString) {

        try {
            return new Promise(function (resolve) {

                var apiEndpoint = 'https://api.forecast.io/forecast/' + inputs.apiKey + '/' + lat + ',' + lng + '?' + queryString;

                request(apiEndpoint, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        try {
                            // If response wrapped in callback, do not JSON.parse response, it isn't valid JSON
                            if (inputs.options.callback) {
                                resolve(body);
                            } else {
                                resolve(JSON.parse(body));
                            }
                        } catch (e) {
                            return exits.error('There was an error parsing forecast.io\'s response: ' + e);
                        }
                    } else {
                        if (response.statusCode === 403) {
                            return exits.invalidAPIKey();
                        } else if (response.statusCode === 400) {
                            return exits.error('There was an error formatting a valid API request, please open an issue at github.com/samhagman/machinepack-forecast.io with the options you tried to pass.');
                        } else {
                            return exits.error('An error was returned from the forecast.io API with HTTP status code: ' + response.statusCode);
                        }
                    }
                });
            });
        } catch (e) {
            return exits.error('An error occurred while attempting to make a request to forecast.io: ' + e.message);
        }
    }

    /**
     * Validates the inputs
     * @returns {boolean}
     */
    function validateInputs() {

        /**
         * Regular expression to match valid latitude and longitude points.
         * @type {RegExp}
         */
        var latLongRegEx = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
        var validUnits = ['us', 'si', 'ca', 'uk', 'auto'];
        var validExcludes = ['currently', 'minutely', 'hourly', 'daily', 'alerts', 'flags'];

        // If no API key
        if (!inputs.apiKey) {
            return exits.invalidAPIKey(': ' + inputs.apiKey);
        }
        // If latitude or longitude is invalid
        else if (!(inputs.lat + ', ' + inputs.lng).match(latLongRegEx)) {
            return exits.invalidLatOrLong();
        } else if (inputs.options.units !== '' && !_.includes(validUnits, inputs.options.units)) {
            return exits.invalidOptions('Your units option (' + inputs.options.units + ') is not a valid value: ' + validUnits);
        } else if (inputs.options.exclude.length !== 0 && _.difference(inputs.options.exclude, validExcludes).length !== 0) {
            return exits.invalidOptions('Your exclude option (' + inputs.options.exclude + ') is not a valid value: ' + validExcludes);
        } else {
            return true;
        }
    }

    /**
     * Turns the inputs.options object into query string parameters for the API request
     * @returns {string}
     */
    function stringifyOptions() {
        try {
            var queryStrings = [];

            if (inputs.options.callback) {
                queryStrings.push('callback=' + inputs.options.callback);
            }
            if (inputs.options.units) {
                queryStrings.push('units=' + inputs.options.units);
            }
            if (inputs.options.exclude.length !== 0) {
                queryStrings.push('exclude=' + inputs.options.exclude.join(','));
            }
            if (inputs.options.lang) {
                queryStrings.push('lang=' + inputs.options.lang);
            }
            return queryStrings.join(',');
        } catch (e) {
            return exits.error('Error turning options object into query string parameters: ' + e);
        }
    }

    // Validate the inputs and then get the weather
    try {
        if (validateInputs()) {

            // Turn options object into query string parameters
            var stringifiedOptions = inputs.options ? stringifyOptions() : '';

            // Get the forecast from forecast.io
            getCurrentForecast(inputs.lat, inputs.lng, stringifiedOptions).then(function (weather) {
                return exits.success(weather);
            })['catch'](function (err) {
                return exits.error('An error occurred while getting the weather from forecast.io: ' + err.message);
            });
        }
    } catch (e) {
        return exits.error('An unexpected error occurred: ' + e);
    }
}