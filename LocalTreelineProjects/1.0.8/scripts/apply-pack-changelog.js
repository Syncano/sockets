var util = require('util');
var path = require('path');
var _ = require('lodash');
var async = require('async');
var LocalMachinepacks = require('machinepack-localmachinepacks');
var Filesystem = require('machinepack-fs');
var NPM = require('machinepack-npm');
var IfThen = require('machinepack-ifthen');

// Ensure we have an absolute destination path.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

// Note that there is NOT a nested `machines` (aka "library") changelog.
// That's because we don't have any way of knowing currently
// what changes need to be applied to make the local version
// match the remote (i.e. local version could have all sorts of
// changes we don't know about).
//
// Over time, we can add a more granular changelog as a separate
// key (i.e. not `definition`).

// For now, notice that we also include `treelineDependencies`, which consists
// of other Treeline-hosted machinepacks which this pack depends upon. Eventually,
// we can use NPM for this (when there is support for organizations)

if (inputs.changelog.length === 0) {
  return exits.success();
}

var changedPack = inputs.changelog[0];
if (changedPack.verb !== 'set') {
  return exits.error(new Error('Invalid changelog: cannot be applied.  For the time being, machinepack changelogs should only use the "set" verb.  We got:
'+util.inspect(inputs.changelog, {depth: null}) ));
}

IfThen.ifThenFinally({
  bool: inputs.isDependency,
  orElse: function(__, exits) {

    // Before going any further, we'll build a postinstall script that installs
    // Treeline dependencies, then inject it into the pack metadata.  This is so
    // that, when this pack is used as a dependency in a production setting
    // (i.e. without the use of the Treeline CLI tool) it will still fetch the
    // appropriate dependencies directly from Treeline.io.  See comments above
    // about the eventual plan to move to a "everything on NPM" model (the issue
    // right now is that we can't publish private packages on behalf of users who
    // don't have a paid NPM account, because they can't install them).

    // Use a separate lighter-weight module which is just the logic for installing treeline deps:
    changedPack.postInstallScript = 'node ./node_modules/treeline-installer/bin/treeline-installer';

    // Add a `treelineApiUrl` CLI opt if the current api url is different than the default.
    if (inputs.treelineApiUrl !== env.thisMachine().inputs.treelineApiUrl.defaultsTo) {
      changedPack.postInstallScript += ' --treelineApiUrl="'+inputs.treelineApiUrl+'"';
    }

    // Gather the new hash information for the treeline.json file
    var treelineJson = require(path.resolve(inputs.dir, "treeline.json"));

    treelineJson.hashes = treelineJson.hashes || {};
    // The "hashes.self" key contains the hash for the machinepack being synced,
    // and hashes for all of its machines.
    treelineJson.hashes.self = treelineJson.hashes.self || {machines: {}};
    treelineJson.hashes.self.hash = changedPack.hash;
    _.each(changedPack.machines, function(machine) {
      if (machine.verb == 'set') {treelineJson.hashes.self.machines[machine.identity] = machine.hash;}
      if (machine.verb == 'del') {delete treelineJson.hashes.self.machines[machine.identity];}
    });

    // Update the treeline.json file with the new hash info
    Filesystem.writeJson({
      destination: path.resolve(inputs.dir, "treeline.json"),
      json: treelineJson,
      force: true
    }).exec(exits);
  },
  then: function(__, exits) {
    return exits.success();
  }
}).exec(function(err) {
  if (err) {return exits.error(err);}

  // Read in the pack's package.json so we can apply changes
  var packageJson;
  try {
    delete require.cache[path.resolve(inputs.dir, "package.json")];
    packageJson = require(path.resolve(inputs.dir, "package.json"));
  } catch (e) {
    packageJson = {dependencies: {}, machinepack:{}};
  }

  // Create an array of package.json dependencies
  var packageJsonDependencies = NPM.arrayifyDependencies({
    dependencies: packageJson.dependencies || {}
  }).execSync();

  // Get the current machine list
  var currentMachines = (packageJson.machinepack && packageJson.machinepack.machines) || [];

  // Remove any machines with `del` verbs in the changeset
  _.remove(currentMachines, function(machineIdentity) {
    return !!_.find(changedPack.machines, {verb: 'del', identity: machineIdentity});
  });

  // Create an array of machine definitions to send to "writePack"
  var machineDefs = [];

  // Add in machines from the changeset with `set` verbs
  _.each(_.where(changedPack.machines, {verb: 'set'}), function(changeDef) {
    machineDefs.push(changeDef.definition);
  });

  // For the remaining (unchanged) machines, push definitions with `unchanged` flags
  _.each(_.difference(currentMachines, _.pluck(machineDefs, 'identity')), function(machineIdentity) {
    machineDefs.push({
      identity: machineIdentity,
      unchanged: true
    });
  });

  // Pull dependencies from the machinepack.npmDependencies dictionary, if any
  var npmDependencies = (packageJson.machinepack && packageJson.machinepack.npmDependencies) || [];

  // If instructed, wipe out all of the current machinepack dependencies
  if (_.find(changedPack.npmDependencies, {verb: 'del', name: '*'})) {
    _.each(npmDependencies, function(npmDependency) {
      _.remove(packageJsonDependencies, {name: npmDependency.name, semverRange: npmDependency.semverRange});
    });
    npmDependencies = [];
  }

  // Otherwise remove dependencies indicated by an operation with a `del` verb
  else {
    // Remove any dependencies with `del` verbs in the changeset from the list of machinepack dependencies
    // and from the big dependencies list
    _.each(_.where(changedPack.npmDependencies, {verb: 'del'}), function(dep) {
      _.remove(packageJsonDependencies, {name: dep.name, semverRange: dep.semverRange});
      _.remove(npmDependencies, {name: dep.name, semverRange: dep.semverRange});
    });
  }

  // Add any dependencies with `set` verbs in the changeset
  _.each(_.where(changedPack.npmDependencies, {verb: 'set'}), function(dep) {
    dep = _.omit(dep, 'verb');
    packageJsonDependencies = packageJsonDependencies.concat(dep);
    npmDependencies = npmDependencies.concat(dep);
  });

  // Make sure dependencies are unique
  npmDependencies = _.uniq(npmDependencies, function(n){return n.name+'/'+n.semverRange;});

  // Ensure a dependency on `treeline-installer` if this is not a dependency
  if (!inputs.isDependency) {
    if (!_.find(packageJson.dependencies, {name: 'treeline-installer'})) {
      packageJsonDependencies.push({ name: 'treeline-installer', semverRange: '^1.0.6' });
    }
  }

  var packData = {
    npmPackageName: changedPack.identity || packageJson.name,
    version: changedPack.version || packageJson.version,
    friendlyName: changedPack.friendlyName || packageJson.friendlyName,
    author: changedPack.author || packageJson.author,
    name: changedPack.identity || packageJson.name,
    description: changedPack.description || packageJson.name,
    machines: machineDefs,
    dependencies: packageJsonDependencies,
    postInstallScript: changedPack.postInstallScript
  };
  // Now we apply changes to the main pack metadata and its machines.
  // This generates the pack folder and machines (as well as package.json
  // and other files) At the moment, we do this every time, no matter what
  // changes there were:
  LocalMachinepacks.writePack({
    destination: inputs.dir,
    packData: packData,
    force: true
  }).exec({
    error: exits.error,
    success: function() {

      async.parallel([
        // Remove any machines that had `del` in the changelog
        function removeMachines(next) {
          async.each(_.where(changedPack.machines, {verb: 'del'}), function(changedMachine, finishedDeleting) {
            Filesystem.rmrf({
              dir: path.resolve(inputs.dir, packageJson.machinepack.machineDir, changedMachine.identity + '.js')
            }).exec(finishedDeleting);
          }, next);
        },
        // Write the new dependencies dictionary under the machinepacks key
        function writePackageJson(next) {
          Filesystem.readJson({
            source: path.resolve(inputs.dir, "package.json"),
            schema: {}
          }).exec({
            error: next,
            success: function(packageJson) {
              packageJson.machinepack.npmDependencies = npmDependencies;
              Filesystem.writeJson({
                destination: path.resolve(inputs.dir, "package.json"),
                json: packageJson,
                force: true
              }).exec(next);
            }
          });
        }
      ], function done(err) {
        if (err) {return exits(err);}
        return exits.success();
      });
    }
  });

});