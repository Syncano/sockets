var util = require('util');
var Mailgun = require('mailgun-js');
var mailcomposer = require('mailcomposer');

var mailgun = Mailgun({apiKey: inputs.apiKey, domain: inputs.domain});

// e.g. ['John Doe <john@example.com>']
var recipients = [
  (function(){
    if (!inputs.toName) {
      return inputs.toEmail;
    }
    return util.format('%s <%s>',inputs.toName, inputs.toEmail);
  })()
];

// e.g. 'John Doe <john@example.com>'
var from = (function(){
  if (!inputs.fromEmail){
    return 'noreply@example.com';
  }
  if (!inputs.fromName) {
    return inputs.fromEmail;
  }
  return util.format('%s <%s>',inputs.fromName, inputs.fromEmail);
})();

var to = '';
recipients.forEach(function(recipient) {
  to += recipient + ',';
});

// Strip off last comma
to = to.slice(0, - 1);

var mail = mailcomposer({
  from: from,
  to: to,
  subject: inputs.subject || 'Hello',
  body: inputs.textMessage || '',
  html: inputs.htmlMessage || ''
});

mail.build(function(mailBuildError, message) {

  var dataToSend = {
    to: to,
    message: message.toString('ascii')
  };

  mailgun.messages().sendMime(dataToSend, function (err, body) {
    if (err) return exits.error(err);
    return exits.success();
  });
});