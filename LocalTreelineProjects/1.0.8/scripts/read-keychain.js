var path = require('path');
var Paths = require('machinepack-paths');
var Filesystem = require('machinepack-fs');

// If specified, ensure keychainPath is an absolute path. If not specified,
// assume the default (`~/.treeline.secret.json`)
inputs.keychainPath = inputs.keychainPath ? path.resolve(inputs.keychainPath) : path.resolve(Paths.home().execSync(), '.treeline.secret.json');

// Read and parse JSON file located at source path on disk into usable data.
Filesystem.readJson({
  source: inputs.keychainPath,
  schema: {
    username: 'mikermcneil',
    secret: '29f559ae-3bec-4d0a-8458-1f4e32a72407'
  }
}).exec(exits);