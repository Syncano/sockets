var Url = require('url');
var isObject = require('lodash.isobject');
var isFunction = require('lodash.isfunction');

// Ensure that, if provided, `meta` is a dictionary.
// This will be used as additional Redis client options.
if (inputs.meta !== undefined) {
  if (!isObject(inputs.meta) || isFunction(inputs.meta)) {
    return exits.error('If provided, `meta` must be a dictionary.');
  }
}

// Validate connection string (call `malformed` if invalid).
try {
  Url.parse(inputs.connectionString);
} catch (e) {
  e.message =
    'Provided value (`' + inputs.connectionString + '`) is not a valid Redis connection string: ' +
    e.message;
  return exits.malformed({
    error: e
  });
}

// Finally, build and return the manager.
var mgr = {
  meta: inputs.meta,
  connectionString: inputs.connectionString,
  onUnexpectedFailure: inputs.onUnexpectedFailure,
  // We set up an empty array for our redis clients, since we need to
  // track them in order to ensure calling destroyManager() kills them all.
  redisClients: []
};
return exits.success({
  manager: mgr
});