// Import `lodash`.
var _ = require('lodash');

// If we don't have a request object in our `env`, bail through the `error` exit.
if (!_.isObject(env.req) || !_.isObject(env.req._sails) || env.req._sails.constructor.name !== 'Sails') {
  return exits.error(new Error('A valid Sails request object must be provided through `.setEnv()` in order to use this machine.'));
}

if (!_.isFunction(env.req.file)) {
  return exits.error(new Error('In order to use this machine, Skipper (or a compatible body parser) must be installed as middleware in your Sails app.'));
}

// Make sure `adapter` is set as an input, not part of `uploadOpts`.
if (typeof inputs.uploadOpts.adapter !== 'undefined') {
  return exits.error('Usage error: Provided `uploadOpts` contains an `adapter` property, which is not allowed.  To customize the Skipper adapter, pass in the package name as the argument for the `adapter` input.');
}

// Get access to upstream.
var upstream = env.req.file(inputs.field);

// Build a dictionary of options for skipper.
// Note that the adapter for Skipper will default to the internal `skipper-disk`, but
// if `skipper-disk` is sent as `inputs.adapter`, it will expect a _local_ copy of
// the `skipper-disk` adapter to exist.
var skipperOpts = _.extend({
  adapter: inputs.adapter
}, inputs.uploadOpts);

// Plug the upstream into a receiver in order to begin uploading the file(s).
upstream.upload(skipperOpts, function afterwards(err, uploadedFileReports){
  if (err) { return exits.error(err); }
  return exits.success(uploadedFileReports);
});