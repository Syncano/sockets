var _ = require('lodash');
var client = require('twilio')(inputs.accountSid, inputs.authToken);

client.incomingPhoneNumbers.list({}, function(err, response) {
  if (err) return exits.error(err);
  try {
    var numbers = _.pluck(response.incomingPhoneNumbers, 'phone_number');
    return exits.success(numbers);
  }
  catch (e) {
    return exits.error(e);
  }
});