var path = require('path');
var enpeem = require('enpeem');
var semver = require('semver');

if (inputs.saveExact && !inputs.save && !inputs.saveDev) {
  throw new Error('Cannot use `saveExact` without also setting either `save` or `saveDev`.');
}
if (inputs.save && inputs.saveDev) {
  throw new Error('Cannot use both `save` AND `saveDev`!');
}

// Resolve provided path to ensure it is absolute
// (and default to cwd if it was left unspecified)
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

// Validate provided semver range.
if (!semver.validRange(inputs.version)) {
  return exits.invalidSemVer();
}

// Install the npm package
enpeem.install({
  dependencies: [
    inputs.name + '@' + inputs.version
  ],
  dir: inputs.dir,
  save: inputs.save,
  saveDev: inputs.saveDev,
  saveExact: inputs.saveExact,
  loglevel: inputs.loglevel,
  prefix: inputs.prefix,
  'cache-min': 999999999
}, function (err) {
  if (err) { return exits.error(err); }
  return exits.success();
});