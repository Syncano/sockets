var request = require('request');

// Base url for API requests.
var BASE_URL = 'https://mandrillapp.com/api/1.0';

request.post({
  url: BASE_URL + '/messages/send-template.json',

  // See https://mandrillapp.com/api/docs/messages.JSON.html#method=send-template for complete reference
  form: {
    key: inputs.apiKey,
    template_name: inputs.templateName,
    template_content: inputs.templateContent,
    message: {
      to: [{
        email: inputs.toEmail,
        name: inputs.toName || inputs.toEmail
      }],
      text: inputs.message || '',
      subject: inputs.subject,
      from_email: inputs.fromEmail,
      from_name: inputs.fromName,
      merge_vars: [{
        rcpt: inputs.toEmail,
        vars: inputs.mergeVars
      }],
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