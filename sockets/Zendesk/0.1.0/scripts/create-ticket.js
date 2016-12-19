var zendesk = require('node-zendesk');

var client = zendesk.createClient({
  username: inputs.username,
  token: inputs.token,
  remoteUri: inputs.remoteUri
});

var ticket = {
  'ticket': {
    requester: {
      name: inputs.requestorName,
      email: inputs.requestorEmail,
    },
    tags: inputs.tags,
    subject: inputs.subject,
    comment: {
      body: inputs.comment || '<no comment provided>'
    }
  }
};

console.log(ticket);

client.tickets.create(ticket, function(err, req, result) {
  if (err) {
    exits.error(err);
  }
  exits.success(result);
});