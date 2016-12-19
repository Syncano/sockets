var request = require('request');

// Base url for API requests.
var BASE_URL = 'https://mandrillapp.com/api/1.0';

request.post({
  url: BASE_URL + '/templates/add.json',
  form: {
    key: inputs.apiKey,
    name: inputs.name,
    from_email: inputs.from_email,
    from_name: inputs.from_name,
    subject: inputs.subject,
    code: inputs.code || undefined,
    text: inputs.text || undefined,
    publish: inputs.publish,
    labels: inputs.labels
  },
  json: true
}, function(err, response, httpBody) {
  if (err) {
    return exits(err);
  } else if (response.statusCode >= 300 || response.statusCode < 200) {
    return exits.error(httpBody);
  } else if (typeof httpBody !== 'object' || httpBody.status === 'error') {
    return exits.error(httpBody);
  } else {
    return exits.success(httpBody);
  }
});