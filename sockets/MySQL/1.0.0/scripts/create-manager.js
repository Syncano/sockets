var util = require('util');
var Url = require('url');
var felix = require('mysql');


// Note:
// Support for different types of managers is database-specific, and is not
// built into the Waterline driver spec-- however this type of configurability
// can be instrumented using `meta`.
//
// In particular, support for ad-hoc connections (i.e. no pool) and clusters/multiple
// pools (see "PoolCluster": https://github.com/felixge/node-mysql/blob/v2.10.2/Readme.md#poolcluster)
// could be implemented here, using properties on `meta` to determine whether or not
// to have this manager produce connections ad-hoc, from a pool, or from a cluster of pools.
//
// Feel free to fork this driver and customize as you see fit.  Also note that
// contributions to the core driver in this area are welcome and greatly appreciated!



// Build a local variable (`_mysqlClientConfig`) to house a dictionary
// of additional MySQL options that will be passed into `.createPool()`
// (Note that these could also be used with `.connect()` or `.createPoolCluster()`)
//
// This is pulled from the `connectionString` and `meta` inputs, and used for
// configuring stuff like `host` and `password`.
//
// For a complete list of available options, see:
//  • https://github.com/felixge/node-mysql#connection-options
//
// However, note that supported options are explicitly whitelisted below.
var _mysqlClientConfig = {};




// Validate and parse `meta` (if specified).
if ( !util.isUndefined(inputs.meta) ) {
  if ( !util.isObject(inputs.meta) ) {
    return exits.error('If provided, `meta` must be a dictionary.');
  }

  // Use properties of `meta` directly as MySQL client config.
  // (note that we're very careful to only stick a property on the client config
  //  if it was not undefined, just in case that matters)
  [
    // MySQL Client Options:
    // ============================================

    // Basic:
    'host', 'port', 'database', 'user', 'password',
    'charset', 'timezone', 'ssl',

    // Advanced:
    'connectTimeout', 'stringifyObjects', 'insecureAuth', 'typeCast',
    'queryFormat', 'supportBigNumbers', 'bigNumberStrings', 'dateStrings',
    'debug', 'trace', 'multipleStatements', 'flags',

    // Pool-specific:
    'acquireTimeout', 'waitForConnections', 'connectionLimit', 'queueLimit',

  ].forEach(function (mysqlClientConfKeyName){
    if ( !util.isUndefined(inputs.meta[mysqlClientConfKeyName]) ) {
      _mysqlClientConfig[mysqlClientConfKeyName] = inputs.meta[mysqlClientConfKeyName];
    }
  });


  // In the future, other special properties of `meta` could be used
  // as options for the manager-- e.g. whether or not to use pooling,
  // or the connection strings of replicas, etc.

  // // Now use other special properties of `meta` as our higher-level
  // // logical machinepack options.
  // [
  //   // Machinepack Configuration:
  //   // ============================================
  //   '',
  // ].forEach(function (pkgConfKeyName) {
  //   // ...
  // });
}


// Validate & parse connection string, pulling out MySQL client config
// (call `malformed` if invalid).
//
// Remember: connection string takes priority over `meta` in the event of a conflict.
try {
  var parsedConnectionStr = Url.parse(inputs.connectionString);

  // Validate that a protocol was found before other pieces
  // (otherwise other parsed info will be very weird and wrong)
  if ( !parsedConnectionStr.protocol ) {
    throw new Error('Protocol (i.e. `mysql://`) is required in connection string.');
  }

  // Parse port & host
  var DEFAULT_HOST = 'localhost';
  var DEFAULT_PORT = 3306;
  if (parsedConnectionStr.port) { _mysqlClientConfig.port = +parsedConnectionStr.port; }
  else { _mysqlClientConfig.port = DEFAULT_PORT; }
  if (parsedConnectionStr.hostname) { _mysqlClientConfig.host = parsedConnectionStr.hostname; }
  else { _mysqlClientConfig.host = DEFAULT_HOST; }

  // Parse user & password
  if ( parsedConnectionStr.auth && util.isString(parsedConnectionStr.auth) ) {
    var authPieces = parsedConnectionStr.auth.split(/:/);
    if (authPieces[0]) {
      _mysqlClientConfig.user = authPieces[0];
    }
    if (authPieces[1]) {
      _mysqlClientConfig.password = authPieces[1];
    }
  }

  // Parse database name
  if (util.isString(parsedConnectionStr.pathname) ) {
    var _databaseName = parsedConnectionStr.pathname;
    // Trim leading and trailing slashes
    _databaseName = _databaseName.replace(/^\/+/, '');
    _databaseName = _databaseName.replace(/\/+$/, '');
    // If anything is left, use it as the database name.
    if ( _databaseName ) {
      _mysqlClientConfig.database = _databaseName;
    }
  }
}
catch (_e) {
  _e.message = util.format('Provided value (`%s`) is not a valid MySQL connection string.',inputs.connectionString) + ' Error details: '+ _e.message;
  return exits.malformed({
    error: _e
  });
}

// Create a connection pool.
//
// More about using pools with node-mysql:
//  • https://github.com/felixge/node-mysql#pooling-connections
var pool = felix.createPool(_mysqlClientConfig);

// Bind an "error" handler in order to handle errors from connections in the pool,
// or from the pool itself. Otherwise, without any further protection, if any MySQL
// connections in the pool die, then the process would crash with an error.
//
// For more background, see:
//  • https://github.com/felixge/node-mysql/blob/v2.10.2/Readme.md#error-handling
pool.on('error', function (err){
  // When/if something goes wrong in this pool, call the `onUnexpectedFailure` notifier
  // (if one was provided)
  if (!util.isUndefined(onUnexpectedFailure)) {
    onUnexpectedFailure(err || new Error('One or more pooled connections to MySQL database were lost. Did the database server go offline?'));
  }
});

// Finally, build and return the manager.
var mgr = {
  pool: pool,
  meta: inputs.meta,
  connectionString: inputs.connectionString
};
return exits.success({
  manager: mgr
});