// Dependencies
var pg = require('pg');
var wlSQL = require('waterline-sequel');

// Rename inputs for clarity
var table = inputs.table;
var schema = inputs.schema;
var query = {
  where: inputs.query || null
};

if(inputs.limit) query.limit = inputs.limit;
if(inputs.skip) query.skip = inputs.skip;
if(inputs.sort) {
  query.sort = {};

  // Parse array and turn into a WL sort criteria
  inputs.sort.forEach(function(sorter) {
    query.sort[sorter.columnName] = sorter.direction;
  });
}

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
var attributes = {};

schema.forEach(function(column) {
  attributes[column.fieldName] = {
    type: column.type
  };
});

normalizedSchema[table] = {
  tableName: table,
  identity: table,
  attributes: attributes
};

// Build the SQL query based on the query inputs
var sequel = new wlSQL(normalizedSchema, sqlOptions);
var sql;

// Build a query for the specific query strategy
try {
  sql = sequel.find(table, query);
} catch (e) {
  return exits.error(e);
}

// Create a new postgresql client
var client = new pg.Client(inputs.connectionUrl);
client.connect(function(err) {

  if(err) {
    return exits.error(err);
  }

  client.query(sql.query[0], function(err, results) {
    client.end();

    if(err) {
      return exits.error(err);
    }

    return exits.success(results.rows);
  });
});