var FullContact = require('fullcontact');
var fullcontact = new FullContact(inputs.apiKey);

fullcontact.person.phone(inputs.phone, function(err, data) {
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