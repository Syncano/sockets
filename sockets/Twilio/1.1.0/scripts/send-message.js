// Either body or mediaUrl (or both) must be present
if (!inputs.body && !inputs.mediaUrl) {
  return exits.noBodyOrMediaSpecified();
}

var client = require('twilio')(inputs.accountSid, inputs.authToken);
var listPhoneNumbers = require('machine').build(require('./list-phone-numbers'));
var listPotentialPhoneNumbers = require('machine').build(require('./list-potential-numbers'));

// If no "from" number was provided, we'll look for one
(function getFromNumber(exits){
  if (inputs.from) {
    return exits.success(inputs.from);
  }

  listPhoneNumbers({
    accountSid: inputs.accountSid,
    authToken: inputs.authToken
  }).exec({
    error: function (err){
      return exits.error(err);
    },
    success: function (phoneNumbers){

      // Use the first phone number associated w/ our account.
      if (phoneNumbers.length > 0) {
        return exits.success(phoneNumbers[0]);
      }

      // If this turns up empty, attempt to procure
      // a phone number using `list-potential-numbers` if necessary.
      listPotentialPhoneNumbers({
        accountSid: inputs.accountSid,
        authToken: inputs.authToken
      }).exec({
        error: function (err){
          return exits.error(err);
        },
        success: function (potentialPhoneNumbers){
          // If there are no potential phone numbers, bail out.
          if (phoneNumbers.length === 0) {
            return exits.notFound();
          }

          // TODO:Try to acquire any one of them
          // TODO:If that works, use it
          // Otherwise bail out
          return exits.notFound();
        }
      }); // </listPotentialPhoneNumbers>
    }
  });// </listPhoneNumbers>
})({
  error: function (err){
    return exits.error(err);
  },
  notFound: function (){
    return exits.noPhoneNumbersAvailable();
  },
  success: function (from){
    var message = {
      to: inputs.to,
      from: from
    };
    if (inputs.body) {
      message.body = inputs.body;
    }
    if (inputs.mediaUrl) {
      message.mediaUrl = inputs.mediaUrl;
    }
    client.messages.create(message, function(err, response) {
      if (err) return exits.error(err);
      return exits.success(response);
    });
  }
});// </getFromPhoneNumber>