var jsforce = require('jsforce');
var _ = require('lodash');
var connString = {};
if (inputs.url) {
  connString.loginUrl = inputs.url;
}
var conn = new jsforce.Connection(connString);
var email = inputs.email;
var pass = inputs.password + inputs.token;

// @todo make this more configurable
var strip = ['LastModifiedDate',
  'ConvertedOpportunityId',
  'CreatedById',
  'IsDeleted',
  'SystemModstamp',
  'PhotoUrl',
  'LastReferencedDate',
  'MasterRecordId',
  'JigsawContactId',
  'Address',
  'CreatedDate',
  'LastViewedDate',
  'IsConverted',
  'LastActivityDate',
  'LastModifiedById',
  'Name',
  'ConvertedDate',
  'ConvertedContactId',
  'ConvertedAccountId'
];

// remove non-allowed values
_.each(strip, function(value, key) {
  delete inputs.objectData[value];
});

if (!inputs.objectData.Id) {
  return exits.objectIdMissing();
}

conn.login(email, pass, function(connErr, result) {
  if (connErr && connErr.toString().indexOf('INVALID_LOGIN') !== -1) {
    return exits.invalidLogin(connErr);
  } else if (connErr) {
    return exits.error(connErr);
  }
  conn
    .sobject(inputs.objectType)
    .update(inputs.objectData, function(objErr, theObject) {
      if (objErr && objErr.toString().indexOf('NOT_FOUND') !== -1) {
        return exits.notFound(objErr);
      } else if (objErr && objErr.toString().indexOf(
        'INVALID_FIELD_FOR_INSERT_UPDATE') !== -1) {
        return exits.invalidField(objErr);
      } else if (objErr && objErr.toString().indexOf(
        'REQUIRED_FIELD_MISSING') !== -1) {
        return exits.requiredFieldMissing(objErr);
      } else if (objErr) {
        return exits.error(objErr);
      }
      return exits.success(theObject);
    });

});