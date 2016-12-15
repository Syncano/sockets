var sendgrid = require('sendgrid')(inputs.apiUser, inputs.apiKey);

var email = new sendgrid.Email({
  to: inputs.toEmail,
  subject: inputs.subject,
  text: inputs.textMessage
});
if (inputs.toName) {
  email.toname = inputs.toName;
}
if (inputs.fromEmail) {
  email.from = inputs.fromEmail;
}
if (inputs.fromName) {
  email.fromname = inputs.fromName;
}
if (inputs.htmlMessage) {
  email.html = inputs.htmlMessage;
}

sendgrid.send(email, function(err, json) {
  console.log(err);
  if (err) {
    return exits.error(err);
  }
  return exits.success(json);
});