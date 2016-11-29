var path = require('path');
var fs = require('fs');

// In case we ended up here w/ a relative path,
// resolve it using the process's CWD
inputs.source = path.resolve(inputs.source);

var contents;
try {
  contents = fs.readFileSync(inputs.source, 'utf8');
  // It worked!
  return exits.success(contents);
}
catch (e) {
  if (e.code === 'ENOENT') {
    return exits.doesNotExist();
  }
  // Some unrecognized error
  return exits.error(err);
}