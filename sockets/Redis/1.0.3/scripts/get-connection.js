var isFunction = require('lodash.isfunction');
var redis = require('redis');

// Build a local variable (`redisClientOptions`) to house a dictionary
// of additional Redis client options that will be passed into createClient().
// (this is pulled from the `meta` mananger)
//
// For a complete list of available options, see:
//  • https://github.com/NodeRedis/node_redis#options-is-an-object-with-the-following-possible-properties
var redisClientOptions = inputs.manager.meta || {};

// Create Redis client
var client;
try {

  client = redis.createClient(inputs.manager.connectionString, redisClientOptions);
} catch (e) {
  // If a "TypeError" was thrown, it means something was wrong with
  // one of the provided client options.  We assume the issue was with
  // the connection string, since this is the case 99% of the time.
  // Of course, the actual error is passed through, so it's possible to
  // tell what's going on if this is a data-type error related to some
  // other custom option passed in via `meta`.
  if (e.name === 'TypeError') {
    return exits.failed({error: new Error('Invalid Redis client options in manager. Details: ' + e.stack)});
  }
  return exits.failed({error: e});
}

////////////////////////////////////////////////////////////////////////
// These two functions (`onPreConnectionError`, `onPreConnectionEnd`)
// have to be defined ahead of time (otherwise, they are not in scope
// from within each other's implementations; and so cannot be used as
// the second argument to `removeListener()`)
var redisConnectionError;
function onPreConnectionError (err){
  redisConnectionError = err;
}
function onPreConnectionEnd (){
  client.removeListener('end', onPreConnectionEnd);
  client.removeListener('error', onPreConnectionError);

  // Prevent automatic reconnection attempts.
  client.end(true);

  return exits.failed({
    error: redisConnectionError || new Error('Redis client fired "end" event before it finished connecting.')
  });
}
////////////////////////////////////////////////////////////////////////

// Bind an "error" listener so that we can track errors that occur
// during the connection process.
client.on('error', onPreConnectionError);

// Bind an "end" listener in case the client "ends" before
// it successfully connects...
client.on('end', onPreConnectionEnd);

// Bind a "ready" listener so that we know when the client has connected.
client.once('ready', function onConnectionReady (){
  client.removeListener('end', onPreConnectionEnd);
  client.removeListener('error', onPreConnectionError);

  // Bind "error" handler to prevent crashing the process if error events
  // are emitted later on (e.g. if the Redis server crashes or the connection
  // is lost for any other reason).
  // See https://github.com/mikermcneil/waterline-query-builder/blob/master/docs/errors.md#when-a-connection-is-interrupted
  client.on('error', function onIntraConnectionError (err){
    // If manager was not provisioned with an `onUnexpectedFailure`,
    // we'll just handle this error event silently (to prevent crashing).
    if (!isFunction(inputs.manager.onUnexpectedFailure)) {
      return;
    }

    if (err) {
      if (/ECONNREFUSED/g.test(err)) {
        inputs.manager.onUnexpectedFailure(new Error(
          'Error emitted from Redis client: Connection to Redis server was lost (ECONNREFUSED). ' +
          'Waiting for Redis client to come back online (if configured to do so, auto-reconnecting behavior ' +
          'is happening in the background). Currently there are ' + client.connections + ' underlying Redis connections.
' +
          'Error details:' + err.stack
          ));
      } else {
        inputs.manager.onUnexpectedFailure(new Error('Error emitted from Redis client.
Error details:' + err.stack));
      }
    } else {
      inputs.manager.onUnexpectedFailure(new Error('Error emitted from Redis client.
 (no other information available)'));
    }
  });

  // Now track this Redis client as one of the "redisClients" on our manager
  // (since we want to be able to call destroyManager to wipe them all)
  inputs.manager.redisClients.push(client);

  // Save a reference to our manager instance on the redis client.
  if (client._fromWLManager) {
    return exits.error('Consistency violation: Somehow, a `_fromWLManager` key already exists on this Redis client instance!');
  }
  client._fromWLManager = inputs.manager;

  // Finally, send back the Redis client as our active "connection".
  return exits.success({
    connection: client
  });
});