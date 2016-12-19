var util = require('util');
var path = require('path');
var debug = require('debug')('local-treeline-projects');
var async = require('async');
var _ = require('lodash');
var LocalMachinepacks = require('machinepack-localmachinepacks');
var Http = require('machinepack-http');
var Filesystem = require('machinepack-fs');
var NPM = require('machinepack-npm');
var IfThen = require('machinepack-ifthen');
var thisPack = require('../');

// Ensure we have an absolute destination path.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

debug('running `install-treeline-deps`');

// Look up user credentials from a keychain file
thisPack.readKeychain({
  keychainPath: inputs.keychainPath
}).exec({
  error: exits.error,
  doesNotExist: function () {
    return exits.error('Cannot install dependencies because the keychain file cannot be found.  Please run `treeline login` on the command-line to authenticate this computer with your Treeline account.');
  },
  success: function (keychain) {

    // Look up this pack or app's id from its linkfile.
    thisPack.readLinkfile({
      dir: inputs.dir
    }).exec({
      error: exits.error,
      doesNotExist: function () {
        return exits.error('Cannot install dependencies because a linkfile (i.e. `treeline.json`) does not exist in this directory.  Please associate this directory with a Treeline project by running `treeline link` on the command-line.');
      },
      success: function (projectInfo){
        debug('Using project info:',projectInfo);

        IfThen.ifThenFinally({
          expectedOutput: {},
          bool: inputs.useCachedHashes,
          orElse: function(__, exits) {
            Filesystem.ls({
              dir: path.join(inputs.dir,'node_modules','@treelinehq'),
              includeFiles: false,
              includeHidden: false,
              includeSymlinks: false
            }).exec({
              doesNotExist: exits.success,
              error: exits.error,
              success: function(subdirs) {
                async.reduce(subdirs, {}, function(memo, subdir, cb) {
                  Filesystem.ls({
                    dir: subdir,
                    includeFiles: false,
                    includeHidden: false,
                    includeSymlinks: false
                  }).exec({
                    error: cb,
                    success: function(depFolders) {
                      async.each(depFolders, function(depFolder, cb) {
                        var slug = depFolder.split(path.sep).slice(-3).join('/');
                        if (slug.indexOf('_') == -1) {return cb();}
                        LocalMachinepacks.getSignature({
                          dir: depFolder
                        }).exec({
                          error: cb,
                          success: function(signature) {
                            memo[slug] = {
                              hash: signature.packHash,
                              machines: _.reduce(signature.machineHashes, function(memo, machineHash) {
                                memo[machineHash.machine] = machineHash.hash;
                                return memo;
                              }, {})
                            };
                            return cb();
                          }
                        });
                      }, function(err) {
                        return cb(err, memo);
                      });
                    }
                  });
                }, function done(err, deps) {
                  return exits.success(deps);
                });
              }
            });

          },
          then: function(__, exits) {
            return exits.success(_.omit(projectInfo.hashes, 'self'));
          }
        }).exec({
          error: exits.error,
          success: function(hashes) {

            // Gather the current hash information from the link file.
            // We'll send this along with the sync request so that the server knows which
            // dependencies need to be updated.
            var hashArray = _.map(hashes, function(machinepack, slug) {
              return {
                machinepack: slug,
                hash: machinepack.hash,
                machines: machinepack.machines
              };
            });

            // Hit Treeline.io to fetch and export the deep dependencies for this project.
            // Because the packs are flattened, this includes nested dependencies as well
            // as top-level dependencies of this project.

            projectInfo.id = projectInfo.id.replace(/^_project_/, '');
            var packId = (projectInfo.type == 'app' ? '_project_' : '') + projectInfo.id;

            // Request updated dependencies from the server, sending along a list of hashes
            // of the dependencies we currently have.  Only dependencies that need to be
            // updated will be returned from the server.
            var url = '/api/v1/machinepacks/'+packId+'/dependencies';
            debug('Communicating w/ '+inputs.treelineApiUrl+url);
            Http.sendHttpRequest({
              method: 'post',
              baseUrl: inputs.treelineApiUrl,
              params: {
                hashes: hashArray
              },
              url: url,
              headers: { 'x-auth': keychain.secret },
            }).exec({
              error: exits.error,
              success: function (response){
                var changelog;
                try {
                  changelog = JSON.parse(response.body);
                }
                catch (e) {
                  return exits.error(e);
                }

                // Get the packs to remove (the ones with the "del" verb in the changelog)
                var packsToRemove = _.where(changelog, {verb: 'del'});
                async.each(packsToRemove, function(packChangeset, next) {
                  // Create a modified "npmPackageName" which includes the version string
                  // as a suffix (e.g. `rachaelshaw/machinepack-foobar_1.5.39`)
                  var versionSpecificPkgName = packChangeset.npmPackageName + '_' + packChangeset.version;
                  // Remove the folder.  Note that any "alias" folders (without the version attached)
                  // will not be removed by this process.  The alias may point to a different version.
                  // TODO--cleanup alias folders when it is determined they are no longer needed.
                  delete projectInfo.hashes[versionSpecificPkgName];
                  console.log("Removing", versionSpecificPkgName);
                  Filesystem.rmrf({
                    dir: path.join(inputs.dir,'node_modules',versionSpecificPkgName)
                  }).exec(next);
                }, function done(err) {

                  // Get the packs to write (the ones with the "set" verb in the changelog)
                  var packsToSet = _.where(changelog, {verb: 'set'});

                  debug('Got exported dependency packs:', util.inspect(packsToSet, {depth: null}));
                  var numPacks = packsToSet.length;
                  var packsProcessed = 0;
                  // Now loop over each of the dependency packs that was returned from the
                  // server and write it to disk.
                  async.eachSeries(packsToSet, function(packChangeset, next) {

                    var packNum = ++packsProcessed;

                    // Create a modified "npmPackageName" which includes the version string
                    // as a suffix (e.g. `rachaelshaw/machinepack-foobar_1.5.39`)
                    var versionSpecificPkgName = packChangeset.npmPackageName + '_' + packChangeset.version;

                    console.log('Syncing ' + packChangeset.npmPackageName + '(' + packNum + '/' + numPacks + ')');

                    // Since we don't send information about the treeline dependencies' npm dependencies
                    // up to the server, we'll be getting the full list back every time.  To account for
                    // this, we'll insert an instruction to the changeset indicating that the current
                    // npm dependencies for the machinepack should be wiped out.
                    packChangeset.npmDependencies = packChangeset.npmDependencies || [];
                    packChangeset.npmDependencies.push({verb: 'del', name: '*'});

                    // If this is a direct, "shallow" (version-agnostic) dependency,
                    // also write a stub pack for it as an alias to the proper version
                    // (by simply requiring it).  This is to allow analog machines to work.
                    thisPack.writeAliasDependency({
                      dir: path.join(inputs.dir,'node_modules',packChangeset.npmPackageName),
                      packData: packChangeset,
                      requireStr: versionSpecificPkgName
                    }).exec({
                      error: function (err) { return next(err); },
                      success: function () {
                        thisPack.applyPackChangelog({
                          changelog: [packChangeset],
                          dir: path.join(inputs.dir,'node_modules',versionSpecificPkgName),
                          isDependency: true
                        }).exec({
                          error: function (err){
                            return next(err);
                          },
                          success: function (){

                            projectInfo.hashes[versionSpecificPkgName] = projectInfo.hashes[versionSpecificPkgName] || {};
                            projectInfo.hashes[versionSpecificPkgName].hash = packChangeset.hash || null,
                            projectInfo.hashes[versionSpecificPkgName].machines = _.extend((hashes[versionSpecificPkgName] && hashes[versionSpecificPkgName].machines) || {}, _.reduce(packChangeset.machines, function(memo, machine) {
                                memo[machine.identity] = machine.hash || null;
                                return memo;
                              }, {}));

                            async.parallel([
                              // Install NPM dependencies for this treeline pack dependency
                              function (doneInstallingNPMDeps){
                                debug('- start npm install for ' + packChangeset.npmPackageName + '(' + packNum + '/' + numPacks + ')');
                                NPM.installDependencies({
                                  dir: path.join(inputs.dir,'node_modules',versionSpecificPkgName)
                                })
                                .exec({
                                  error: function (err){ return doneInstallingNPMDeps(err); },
                                  success: function (){
                                    debug('- finished npm install for ' + packChangeset.npmPackageName + '(' + packNum + '/' + numPacks + ')');
                                    return doneInstallingNPMDeps();
                                  }
                                });
                              },
                              // For ALL of this dependency's stated top-level treeline dependencies,
                              // write stub packs to disk that simply require the appropriate version
                              // from the top-level pack.
                              function (doneInstallingTreelineDeps){
                                async.each(packChangeset.treelineDependencies, function (depOfDepMapping, next) {
                                  // Look up additional information about this dependency from the flat
                                  // list of top-level dependencies we've been using above
                                  var deepDepPack = _.find(packsToSet, {
                                    slug: depOfDepMapping.slug,
                                    version: depOfDepMapping.version
                                  });

                                  IfThen.ifThenFinally({
                                    expectedOutput: {},
                                    bool: !!deepDepPack,
                                    then: function(__, exits) {
                                      return exits.success(deepDepPack);
                                    },
                                    orElse: function(__, exits) {
                                      var slugParts = depOfDepMapping.slug.split('/');
                                      var owner = slugParts[0];
                                      var identity = slugParts[1];
                                      LocalMachinepacks.readPackageJson({
                                        dir: path.join(inputs.dir,'node_modules','@treelinehq',owner,identity + '_' + depOfDepMapping.version)
                                      }).exec({
                                        error: exits.error,
                                        success: exits.success
                                      });
                                    }
                                  }).exec({
                                    error: function(err) {
                                      return next(new Error('Consistency violation: Unexpected dependency id/version combination ("'+depOfDepMapping.identity+'@'+depOfDepMapping.version+'")'));
                                    },
                                    success: function(deepDepPack) {

                                      // Finally, write the alias pack to disk.
                                      thisPack.writeAliasDependency({
                                        dir: path.join(inputs.dir,'node_modules',versionSpecificPkgName,'node_modules',deepDepPack.npmPackageName),
                                        packData: deepDepPack,
                                        requireStr: deepDepPack.npmPackageName+'_'+deepDepPack.version
                                      }).exec({
                                        error: function (err) { return next(err); },
                                        success: function () { return next(); }
                                      });

                                    }
                                  });
                                }, function afterwards (err) {
                                  if (err) { return doneInstallingTreelineDeps(err); }
                                  return doneInstallingTreelineDeps();
                                }); //</async.each dependency of dependency>
                              }
                            ], function afterwards (err){
                              if (err) {
                                return next(err);
                              }
                              return next();
                            }); //</async.parallel>
                          }
                        });// </write treeline dependency to local disk>
                      }
                    });

                  }, function afterwards(err){

                    debug ('== Finished installing all treeline dependencies ==');
                    if (err) {return exits.error(err);}

                    Filesystem.writeJson({
                      destination: path.resolve(inputs.dir, "treeline.json"),
                      json: projectInfo,
                      force: true
                    }).exec(exits);

                  }); //</async.each dependency>

                });



              }
            });
          }
        });

      }
    });

  }
});