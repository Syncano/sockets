// Bring in a mongo driver
var MongoClient = require('mongodb').MongoClient;

var validQuery = (function isQueryValid (query){
  // TODO: validate query -- all we know is that it will be a dictionary (plain ole js object)
  return true;
})(inputs.query);
if (!validQuery) {
  return exits.invalidQuery();
}

// TODO: validate inputs


// Connection URL
var url = inputs.connectionUrl || 'mongodb://localhost:27017/machinepack-mongodb-default';

// Use connect method to connect to the mongo server
// (every call brings up a new connection for now)
MongoClient.connect(url, function(err, db) {

  // Failed to connect
  if (err) {
    // TODO: negotiate this error further as needed
    return exits.couldNotConnect(err);
  }

  // Look up collection
  var collection;
  try {
    collection = db.collection(inputs.collection);
  }
  catch (e) {
    // If collection does not exist,
    if (!collection) {
      // Close the db connection
      db.close();
      // and call back w/ an error.
      return exits.invalidCollection();
    }
  }


  // TODO: Prepare the opts object
  var opts = {};
  // if (!_.isUndefined(inputs.upsert)) { opts.upsert = inputs.upsert;} ...
  // etc.

  // Hit mongo w/ the find
  collection.find(inputs.query, /* ... todo: al the things */ opts, function (err, result) {
      // if thisWriteResult.hasWriteConcernError()...
      if (err) {

        // Close the db connection
        db.close();

        // ...then negotiate it and call the appropriate exit
        // e.g.
        // {
        //   "code" : 64,
        //   "errmsg" : "waiting for replication timed out at shard-a"
        // }
        // (usually a good idea to just hit `error` to start with, then add other exits as needed)
        return exits.error(err);
      }

      // Close the db connection
      db.close();

      // Then send back result object from mongo (see `example` in success exit)
      return exits.success(result);

  });

});