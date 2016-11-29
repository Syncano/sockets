var FullContact = require('fullcontact');
var fullcontact = new FullContact(inputs.apiKey);

var facebookUsername = inputs.username;
var facebookId = inputs.id;
var queue = (inputs.queue && inputs.queue === '1') ? 1 : 0;
var webhookUrl = inputs.webhookUrl || null;
var webhookId = inputs.webhookId || null;

// Username takes precedence
if (facebookUsername) {
  fullcontact.person.facebook(facebookUsername, queue, webhookUrl, webhookId, function(err, data) {
    if (err) {
      if (202 === err.status) {
        return exits.queued(err);
      } else if (404 === err.status) {
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
    return exits.success(data);
  });
} else if (facebookId) {
  fullcontact.person.facebookId(facebookId, function(err, data) {
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
} else {
  return exits.missingArgument('username or id');
}