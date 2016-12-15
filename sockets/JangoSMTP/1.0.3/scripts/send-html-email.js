var util = require('util');
var Http = require('machinepack-http');

Http.sendHttpRequest({
  url: 'https://api.jangomail.com/api.asmx/SendTransactionalEmail',
  method: 'get',
  params: {
    Username: inputs.username,
    Password: inputs.password,
    FromEmail: inputs.fromEmail,
    FromName: inputs.fromName,
    ToEmailAddress: inputs.toEmail,
    Subject: inputs.subject,
    MessagePlain: inputs.textMessage || '',
    MessageHTML: inputs.htmlMessage || '',
    Options: inputs.options || ''
  }/*,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }*/
}).exec({
  // OK.
  success: function(result) {

    // Unfortunately, Jango only returns XML and it difficult to parse
    var xml = result.body;

    if (xml.indexOf('"<?xml') != 0) {
      return exits.error('There was an error parsing the XML response.');
    }

    // remove the backslashes around the quotes
    xml = xml.replace(/\"/g, '"');

    // remove the header
    xml = xml.replace('<?xml version="1.0" encoding="utf-8"?>', '');

    //remove CRLFs
    var pattern = new RegExp("\\\\r\\\
", "g");
    xml = xml.replace(pattern, '');

    // remove the <string>
    xml = xml.replace("<string xmlns="http://api.jangomail.com/">", '');
    // remove the </string>
    xml = xml.replace("</string>", "");

    // remove remaining double quote characters
    xml = xml.replace(/"/g, '');

    // The remaining text is what we want.  Split it on the new line characters
    var parts = xml.split("\
");
    if (util.isArray(parts) && parts.length === 3) {
      var resultObj = {
        code: parts[0],
        result: parts[1],
        transactionId: parts[2]
      };
      return exits.success(resultObj);
    }
    return exits.error('There was a problem parsing the XML response.');
  },
  error: function(err) {
    if (err) return exits.error(err);
  },
  // 404 status code returned from server
  notFound: function(result) {
    if (err) return exits.error(err);
  },
  // 400 status code returned from server
  badRequest: function(result) {
    return exits.error('Something was wrong with your HTTP request (' + result.status + ').');
  },
  // 403 status code returned from server
  forbidden: function(result) {
    return exits.wrongOrNoUsernamePassword('Invalid or unprovided username/password (403).');
  },
  // 401 status code returned from server
  unauthorized: function(result) {
    return exits.wrongOrNoUsernamePassword('Invalid or unprovided username/password (401).');
  },
  // 5xx status code returned from server (this usually means something went wrong on the other end)
  serverError: function(result) {
    result.machineMessage = 'Something went wrong on the other end (' + result.status + ').';
    return exits.error(result);
  },
  // Unexpected connection error: could not send or receive HTTP request.
  requestFailed: function() {
    return exits.error('Could not send or receive the HTTP request.');
  }
});

/*mailgun.messages().sendMime(dataToSend, function (err, body) {
 if (err) return exits.error(err);
 return exits.success();
 });*/