var Browserify = require('browserify');

var opts = {};
if (typeof inputs.exportAs !== 'undefined') {
  opts.standalone = inputs.exportAs;
}
var task = Browserify(opts);

// We both `add` and `require` the main entry point to ensure that
// relative-path requires (e.g. "../", "./", etc.) work properly.
task.add(inputs.path);
task.require(inputs.path);

// Add additional requires
// (see note in comments above)
// task.require(inputs.requires);

// Now bundle up the Node scripts into a browser-compatible JavaScript string.
task.bundle(function (err, buffer) {
  if (err) {
    return exits.error(err);
  }

  try {
    var javascript = buffer.toString();
    return exits.success(javascript);
  }
  catch (e) {
    return exits.error(err);
  }
});