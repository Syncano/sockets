var util = require('util');
var _ = require('lodash');

var Npm = require('machinepack-npm');


// Reuse NPM machinepack's parsing logic to grab the basic stuff from
// the package.json file.
var _npmMetadata;
try {
  _npmMetadata = Npm.parsePackageJson({json: inputs.json}).execSync();
}
catch (e){
  return exits.error(e);
}

var machinepack = {};

// Include basic metadata from NPM
machinepack.npmPackageName = _npmMetadata.name;
machinepack.version = _npmMetadata.version;
machinepack.description = _npmMetadata.description;
machinepack.keywords = _npmMetadata.keywords;
machinepack.latestVersionPublishedAt = _npmMetadata.latestVersionPublishedAt;
machinepack.author = _npmMetadata.author;
machinepack.license = _npmMetadata.license;
machinepack.sourceUrl = _npmMetadata.sourceUrl;
machinepack.githubUrl = _npmMetadata.sourceUrl;
machinepack.npmUrl = _npmMetadata.npmUrl;
machinepack.contributors = _npmMetadata.contributors;
machinepack.dependencies = _npmMetadata.dependencies;

// Then parse the raw json to extract the `machinepack` property.
var _data;
try {
  _data = JSON.parse(inputs.json);
}
catch (e) {
  return exits.error(e);
}

// Build up machinepack-specific properties
try {
  machinepack.identity = machinepack.npmPackageName;

  // Determine where to find metadata about this module's latest version
  // (that's where the `machinepack` key lives- it's not at the top-level if the provided
  //  JSON string came from pulling down a package.json file from NPM)
  var latestVersion = _data.versions ? _data.versions[machinepack.version] : _data;

  // Ensure the `machinepack` key exists
  if (!latestVersion.machinepack) {
    return exits.notMachinepack();
  }

  // Determine machinepack friendly name
  machinepack.friendlyName = (function determineSuitableFriendlyName (){
    var friendlyName = (latestVersion.machinepack&&latestVersion.machinepack.friendlyName) || machinepack.identity;
    // If friendlyname still has "machinepack-" prefix in it, wipe it out
    friendlyName = friendlyName.replace(/^machinepack-/, '');

    // Then capitalize whatever's left
    return friendlyName[0].toUpperCase() + friendlyName.slice(1);
  })();

  // Determine path to machine directory
  machinepack.machineDir = latestVersion.machinepack.machineDir;
  if (typeof machinepack.machineDir !== 'string') {
    var err = new Error('Invalid or missing `machineDir` in `machinepack` key of package.json!');
    err.exit = err.code = 'notMachinepack';
    throw err;
  }


  // Parse machine identities
  machinepack.machines = (function listMachineIdentities(){
    try {
      return _.reduce(latestVersion.machinepack.machines, function (memo, machineIdentity){
        memo.push(machineIdentity);
        return memo;
      }, []);
    }
    catch (e){ return []; }
  })();

  // Build docs url.
  machinepack.nodeMachineUrl = util.format('http://node-machine.org/%s', machinepack.identity);
  machinepack.docsUrl = machinepack.nodeMachineUrl;

  // Extract more metadata from the `machinepack` property in the package.json data.
  machinepack.extendedDescription = latestVersion.machinepack.extendedDescription;
  machinepack.moreInfoUrl = latestVersion.machinepack.moreInfoUrl;
  machinepack.iconSrc = latestVersion.machinepack.iconSrc;
  machinepack.testsUrl = latestVersion.machinepack.testsUrl;

  // Default variableName to friendlyName, then mutate it a bit:
  machinepack.variableName = (function (){
    var _variableName = machinepack.friendlyName;
    // strip stuff wrapped in parentheses
    _variableName = _variableName.replace(/\([^\(\)]*\)/g, '');
    // strip any weird characters
    _variableName = require('machinepack-javascript').coerceVarname({
      string: _variableName
    }).execSync();
    // capitalize the first letter
    _variableName = _variableName[0].toUpperCase() + _variableName.slice(1);
    return _variableName;
  })();

  machinepack.machineDependencies = latestVersion.machinepack.npmDependencies;

}
catch (e) {
  return exits(e);
}

// Ensure minimum required machinepack metadata is present.
// (i.e. no empty strings allowed)
if (!machinepack.identity || !machinepack.machineDir) {
  return exits.notMachinepack();
}

return exits.success(machinepack);