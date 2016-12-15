var request = require('request');

// Base url for API requests.
var BASE_URL = 'https://mandrillapp.com/api/1.0';

request.post({
  url: BASE_URL + '/messages/send.json',

  // See https://mandrillapp.com/api/docs/messages.JSON.html for complete reference
  form: {
    key: inputs.apiKey,
    message: {
      to: [{
        email: inputs.toEmail,
        name: inputs.toName || inputs.toEmail
      }],
      text: inputs.message || '',
      html: '',
      subject: inputs.subject,
      from_email: inputs.fromEmail,
      from_name: inputs.fromName,
      auto_html: true
    }
  },
  json: true
}, function(err, response, httpBody) {
  if (err) {
    return exits.error(err);
  } else if (response.statusCode >= 300 || response.statusCode < 200) {
    return exits.error(httpBody);
  } else if (typeof httpBody !== 'object' || httpBody.status === 'error') {
    return exits.error(httpBody);
  } else {
    return exits.success();
  }
});