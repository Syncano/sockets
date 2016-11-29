var pg = require('pg');

// Create a new postgresql client
var client = new pg.Client(inputs.connectionUrl);
client.connect(function(err) {

  if(err) {
    return exits.error(err);
  }

  var query = "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema'";
  client.query(query, function(err, results) {

    client.end();

    if(err) {
      return exits.error(err);
    }

    // Build an array of tablenames
    results.rows = results.rows || [];

    var names = results.rows.map(function(row) {
      return row.tablename;
    });

    return exits.success(names);
  });

});