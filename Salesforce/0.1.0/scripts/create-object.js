var jsforce = require('jsforce');
var connString = {};
if (inputs.url) {
  connString.loginUrl = inputs.url;
}
var conn = new jsforce.Connection(connString);
var email = inputs.email;
var pass = inputs.password + inputs.token;

conn.login(email, pass, function(connErr, result) {
  if (connErr && connErr.toString().indexOf('INVALID_LOGIN') !== -1) {
    return exits.invalidLogin(connErr);
  } else if (connErr) {
    return exits.error(connErr);
  }
  if (inputs.objectType.Id) {
    delete inputs.objectType.Id;
  }
  conn
    .sobject(inputs.objectType)
    .create(inputs.objectData, function(objErr, theObject) {
      if (objErr && objErr.toString().indexOf('NOT_FOUND') !== -1) {
        return exits.notFound(objErr);
      } else if (objErr && objErr.toString().indexOf(
        'REQUIRED_FIELD_MISSING') !== -1) {
        return exits.requiredFieldMissing(objErr);
      } else if (objErr) {
        return exits.error(objErr);
      }
      return exits.success(theObject.id);
    });

});