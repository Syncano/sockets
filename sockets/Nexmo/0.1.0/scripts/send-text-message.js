var request = require('superagent');

var protocol = inputs.protocol || 'https';
var baseUrl  = protocol + '://rest.nexmo.com';
var smsUrl   = baseUrl + '/sms/json';

request
  .get(smsUrl)
  .query({
    api_key: inputs.apiKey,
    api_secret: inputs.apiSecret,
    from: inputs.from,
    to: inputs.to,
    text: inputs.text
  })
  .end(function(err, res) {
    if (err) return exits.error(err);

    var result = res.body.messages.reduce(function (initialValue, currentValue, index, array) {
      if (parseInt(currentValue.status) !== 0) {
        initialValue.numFails += 1;
        initialValue.fails.push({
          messageId: currentValue['message-id'],
          statusCode: currentValue['status'],
          errorText: currentValue['error-text']
        });
      }
      return initialValue;
    }, {
      numFails: 0,
      fails: []
    });

    if (result.numFails === 0) {
      return exits.success(res.body);
    } else {
      return exits.requestError(result);
    }
  });