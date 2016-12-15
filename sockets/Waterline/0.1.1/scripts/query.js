// Import `isObject` and `isUndefined` Lodash functions.
var _isObject = require('lodash.isobject');
var _isUndefined = require('lodash.isundefined');

// If we can't access the ORM, leave through the `error` exit.
if (!_isObject(env.sails.hooks.orm)) {
  return exits.error(new Error('`sails.hooks.orm` cannot be accessed; please ensure this machine is being run in a compatible habitat.'));
}

// Attempt to load the specified datastore, or else leave through the `error` exit.
var Datastore = env.sails.hooks.orm.datastores[inputs.datastore];
if (!_isObject(Datastore)) {
  return exits.error(new Error('Unrecognized datastore (`'+inputs.datastore+'`).  Please check your `config/datastores.js` file to verify that a datastore with this identity exists.'));
}

// Start building the deferred object.
var pending = Datastore.query(inputs.statement);

// Use metadata if provided.
if (!_isUndefined(inputs.meta)) {
  pending = pending.meta(inputs.meta);
}

// Use existing connection if one was provided.
if (!_isUndefined(inputs.connection)) {
  pending = pending.usingConnection(inputs.connection);
}

// Now kick everything off.
// This acquires the connection, runs the provided query,
// and releases the connection when finished.
pending.exec(function afterwards(err, result, meta) {
  // If there were any errors running the query...
  if (err) {
    // Note that we use `exits()` here instead of `exits.error()`.
    // This allows the `queryFailed` exit to be traversed automatically if the `err` has `exit: "queryFailed"`.
    // In this case, `err.output` will be used as the actual output.  All of this behavior is built-in to the
    // machine runner.
    return exits(err);
  }
  // Otherwise return the query result through the `success` exit.
  return exits.success(result);
});
//
// Note that, behind the scenes, Waterline is doing:
//
// Datastore.driver.compileQuery()
// Datastore.driver.getConnection({manager: Datastore.manager})
// Datastore.driver.sendNativeQuery()
// |
// |_ Datastore.driver.parseNativeQueryResult()
// |  Datastore.driver.releaseConnection()
//-or-
// |_ Datastore.driver.parseNativeQueryError()
//    Datastore.driver.releaseConnection()