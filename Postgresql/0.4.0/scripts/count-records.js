// Dependencies
var pg = require('pg');
var wlSQL = require('waterline-sequel');

// Rename inputs for clarity
var table = inputs.table;
var query = {
  where: inputs.query || null
};

// WL SQL options
var sqlOptions = {
  parameterized: true,
  caseSensitive: true,
  escapeCharacter: '"',
  casting: true,
  canReturnValues: true,
  escapeInserts: true,
  declareDeleteAlias: false,
  wlNext: {
    caseSensitive: true
  }
};

var normalizedSchema = {};
normalizedSchema[table] = {
  tableName: table,
  identity: table,
  attributes: {}
};

// Build the SQL query based on the query inputs
var sequel = new wlSQL(normalizedSchema, sqlOptions);
var sql;

// Build a query for the specific query strategy
try {
  sql = sequel.count(table, query);
} catch (e) {
  return exits.error(e);
}

// Create a new postgresql client
var client = new pg.Client(inputs.connectionUrl);
client.connect(function(err) {

  if(err) {
    return exits.error(err);
  }

  client.query(sql.query[0], sql.values[0], function(err, results) {
    client.end();

    if(err) {
      return exits.error(err);
    }

    var count = results.rows[0] && results.rows[0].count;
    return exits.success(count);
  });
});