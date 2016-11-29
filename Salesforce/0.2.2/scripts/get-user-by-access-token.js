var request = require('request');

var options = {
  url: inputs.id,
  headers: {
    'Authorization': inputs.tokenType + " " + inputs.accessToken
  }
};

request(options, function(error, res, body) {

  try{

    body = JSON.parse(body);

    return exits.success(body);
  } catch(e) {

      return exits.error('Error when parsing body.')

  }

})