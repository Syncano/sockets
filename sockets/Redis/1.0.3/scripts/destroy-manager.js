var Pack = require('../');
var async = require('async');

// First back up redisClients array, so we're not mutating it as we iterate over each one.
// (since releaseConnection() removes items from the array)
var _redisClients = [].concat(inputs.manager.redisClients);

// Now call releaseConnection() on each redis client under management.
async.each(_redisClients, function _eachRedisClient (redisClient, next){
  Pack.releaseConnection({
    connection: redisClient
  }).exec(next);
}, function afterwards (err){
  if (err) {
    return exits.failed({
      error: new Error('Failed to destroy the Redis manager and/or gracefully end all connections under management.  Details:
=== === ===
' + err.stack)
    });
  }

  // All redis clients under management have been annihilated.
  return exits.success();
});