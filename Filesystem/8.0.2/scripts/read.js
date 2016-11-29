var path = require('path');
var fs = require('fs');

// In case we ended up here w/ a relative path,
// resolve it using the process's CWD
inputs.source = path.resolve(inputs.source);

fs.readFile(inputs.source, 'utf8', function (err, contents) {
  // It worked!
  if (!err) {
    return exits.success(contents);
  }
  // No need for `null` check here because we already know `err` is falsy
  if (typeof err === 'object' && err.code === 'ENOENT') {
    return exits.doesNotExist();
  }
  // Some unrecognized error
  return exits.error(err);
});