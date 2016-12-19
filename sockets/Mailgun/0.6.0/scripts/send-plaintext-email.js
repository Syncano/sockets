var util = require('util');
var Mailgun = require('mailgun-js');

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

mailgun.messages().send({
  from: from,
  to: recipients,
  subject: inputs.subject||'Hello world!',
  text: inputs.message||' ',
  // attachment: attch
}, function (err, body) {
  if (err) return exits.error(err);
  return exits.success();
});