var jsforce = require('jsforce');
var _ = require('lodash');
var connString = {};
if (inputs.url) {
  connString.loginUrl = inputs.url;
}
var conn = new jsforce.Connection(connString);
var email = inputs.email;
var pass = inputs.password + inputs.token;

function returnCleanedValues(whichFields, data) {
  if (_.isArray(data)) {
    // if data is array
    return _.map(data, function(singleData) {
      return returnCleanedValues(whichFields, singleData);
    });
  } else {
    // object, we want to map these fields
    // for each field requested, get value from data
    return _.mapValues(whichFields, function(value, key) {
      if (_.isArray(data[key]) && _.isArray(value)) {
        return returnCleanedValues(value[0], data[key]);
      }
      return data[key];
    });
  }
}

conn.login(email, pass, function(connErr, result) {
  if (connErr && connErr.toString().indexOf('INVALID_LOGIN') !== -1) {
    return exits.invalidLogin(connErr);
  } else if (connErr) {
    return exits.error(connErr);
  }
  conn
    .sobject(inputs.objectType)
    .describe(function(objErr, theObjectDescription) {
      if (objErr && objErr.toString().indexOf('NOT_FOUND') !== -1) {
        return exits.notFound(objErr);
      } else if (objErr) {
        return exits.error(objErr);
      }
      if (inputs.includeValues) {
        var cleaned = returnCleanedValues(
          inputs.includeValues,
          theObjectDescription
        );
        return exits.success(cleaned);
      } else {
        return exits.success(theObjectDescription.fields);
      }

    });

});