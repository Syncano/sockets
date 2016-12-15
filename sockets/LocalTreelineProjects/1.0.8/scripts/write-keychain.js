var path = require('path');
var Filesystem = require('machinepack-fs');
var Paths = require('machinepack-paths');

// If specified, ensure keychainPath is an absolute path. If not specified,
// assume the default (`~/.treeline.secret.json`)
inputs.keychainPath = inputs.keychainPath ? path.resolve(inputs.keychainPath) : path.resolve(Paths.home().execSync(), '.treeline.secret.json');

// Read and parse JSON file located at source path on disk into usable data.
Filesystem.writeJson({
  // Allow the destination to be overridden by an environment var
  destination: inputs.keychainPath,
  force: true,
  json: {
    username: inputs.username,
    secret: inputs.secret
  }
}).exec(exits);