var FullContact = require('fullcontact');
var fullcontact = new FullContact(inputs.apiKey);

var emailMD5 = inputs.emailMD5;
var queue = (inputs.queue && inputs.queue === '1') ? 1 : 0;
var webhookUrl = inputs.webhookUrl || null;
var webhookId = inputs.webhookId || null;

if (emailMD5) {
  emailMD5 = emailMD5.toLowerCase();
}

fullcontact.person.md5(emailMD5, queue, webhookUrl, webhookId, function(err, data) {
  if (err) {
    if (404 === err.status) {
      return exits.wait24Hours(err);
    } else if (400 === err.status) {
      return exits.malformedRequest(err);
    } else if (403 === err.status) {
      return exits.apiKeyProblem(err);
    } else if (422 === err.status) {
      return exits.queryParamProblem(err);
    }
    return exits.error(err);
  }
  if (202 === data.status) {
    return exits.queued(data);
  }
  return exits.success(data);
});