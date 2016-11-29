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
var pending = Datastore.connect(function _duringConnection(connection, done) {
  inputs.during({ connection: connection }).exec(done);
});

// Use metadata if provided.
if (!_isUndefined(inputs.meta)) {
  pending = pending.meta(inputs.meta);
}

// Now kick everything off.
// This acquires the connection, runs the provided query,
// and releases the connection when finished.
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
// _duringConnection()
// Datastore.driver.releaseConnection()