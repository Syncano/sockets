var request = require('request');
var auth = "Basic " + new Buffer(inputs.accountSid+":"+inputs.authToken).toString("base64");
request.get(
  {
    url: 'https://lookups.twilio.com/v1/PhoneNumbers/'+inputs.phoneNumber,
    headers: {
      "Authorization": auth
    }
  },
  function Response(error, response, body){
    if (error) {
      return exits.error(error);
    }
    console.log(error, response);
    if (response.statusCode === 401) {
      return exits.wrongOrNoKey("Invalid API or Auth key. All calls must have vailid keys.");
    }
     try {
      var responseBody = JSON.parse(body);
    } catch (e) {
      return exits.error('An error occurred while parsing the body.');
    }
    return exits.success(responseBody.national_format);
  });