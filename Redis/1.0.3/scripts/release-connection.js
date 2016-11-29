var util = require('util');

// Validate provided connection (which is actually a redis client)
if ( !util.isObject(inputs.connection) || !util.isFunction(inputs.connection.end) || !util.isFunction(inputs.connection.removeAllListeners) ) {
  return exits.badConnection();
}

// Grab a reference to the manager instance we piggybacked on this redis client.
var mgr = inputs.connection._fromWLManager;

// Release connection.
try {
  inputs.connection.end(true);

  // If necessary, we could also do the following here:
  // inputs.connection.removeAllListeners();
  //
  // (but not doing that unless absolutely necessary because it could cause crashing
  //  of the process if our `redis` dep decides to emit any surprise "error" events.)
}
catch (e) {
  return exits.error(e);
}

// Remove this redis client from the manager.
var foundAtIndex = mgr.redisClients.indexOf(inputs.connection);
if (foundAtIndex === -1) {
  return exits.badConnection({
    meta: new Error('Attempting to release connection that is no longer referenced by its manager.')
  });
}
mgr.redisClients.splice(foundAtIndex, 1);

// And that's it!
return exits.success();