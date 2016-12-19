var _isObject = require('lodash.isobject');
var _isUndefined = require('lodash.isundefined');

if (!_isObject(env.sails.hooks.orm)) {
  return exits.error(new Error('`sails.hooks.orm` cannot be accessed; please ensure this machine is being run in a compatible habitat.'));
}

var Datastore = env.sails.hooks.orm.datastores[inputs.datastore];
if (!_isObject(Datastore)) {
  return exits.error(new Error('Unrecognized datastore (`'+inputs.datastore+'`).  Please check your `config/datastores.js` file to verify that a datastore with this identity exists.'));
}

// Start building the deferred object.
var pending = Datastore.transaction(function _duringTransaction(connection, done) {
  inputs.during({ connection: connection }).exec(done);
});

// Use metadata if provided.
if (!_isUndefined(inputs.meta)) {
  pending = pending.meta(inputs.meta);
}

// Use existing connection if one was provided.
if (!_isUndefined(inputs.connection)) {
  pending = pending.usingConnection(inputs.connection);
}

// Now kick everything off.
// This begins the transaction, runs the provided logic,
// and either commits or rolls back as is appropriate.
pending.exec(function afterwards(err, result, meta) {
  // Forward any errors to the `error` exit.
  if (err) {
    return exits.error(err);
  }
  // Otherwise return the result of the `during` logic through the `success` exit.
  return exits.success(result);
});
//
// Note that, behind the scenes, Waterline is doing:
//
// Datastore.driver.getConnection({manager: Datastore.manager})
// Datastore.driver.beginTransaction()
// _duringTransaction()
// |
// |_ Datastore.driver.commitTransaction()
// |  Datastore.driver.releaseConnection()
//-or-
// |_ Datastore.driver.rollbackTransaction()
//    Datastore.driver.releaseConnection()