var Http = require('machinepack-http');
var thisPack = require('../');
var IfThen = require('machinepack-ifthen');
var NPM = require('machinepack-npm');
var FileSystem = require('machinepack-fs');
var async = require('async');
var path = require('path');
var _ = require('lodash');

// Ensure we have an absolute destination path.
inputs.dir = inputs.dir ? path.resolve(inputs.dir) : process.cwd();

thisPack.readLinkfile({
  dir: inputs.dir
}).exec({
  error: exits.error,
  doesNotExist: function () {
    return exits.error('Cannot install dependencies because a linkfile (i.e. `treeline.json`) does not exist in this directory.  Please associate this directory with a Treeline project by running `treeline link` on the command-line.');
  },
  success: function (projectInfo){
    async.parallel({
      // Clear out the controllers (if this is an app)
      clearControllers: function(next) {
        if (inputs.type == 'app') {
          FileSystem.rmrf({
            dir: path.resolve(inputs.dir, 'api', 'controllers')
          }).exec(next);
        }
        else {
          return next();
        }
      },
      // Clear out the models (if this is an app)
      clearModels: function(next) {
        if (inputs.type == 'app') {
          FileSystem.rmrf({
            dir: path.resolve(inputs.dir, 'api', 'models')
          }).exec(next);
        }
        else {
          return next();
        }
      },

    }, function (err) {
      if (err) {return exits.error(err);}
      // If `inputs.type` was provided, use it.
      // Otherwise, sniff around for the package.json file and figure out
      // what kind of project this is.
      thisPack.normalizeType({
        type: inputs.type
      }).exec({
        error: exits.error,
        success: function (type) {

          IfThen.ifThenFinally({

            bool: type == 'app',
            expectedOutput: {},

            // If this is an app, send it a message that it should go into maintenance mode
            then: function (__, exits) {
              if (inputs.previewServerLifted) {
                Http.sendHttpRequest({
                  url: '/_prepare',
                  baseUrl: 'http://localhost:'+inputs.localPort,
                  method: 'trace'
                }).exec({
                  error: exits.error,
                  success: function(response) {
                    return exits.success();
                  }
                });
              } else {
                return exits.success();
              }
            },

            // For machinepacks, just continue
            orElse: function(__, exits) {
              return exits.success();
            }

          }).exec({
            error: exits.error,
            success: function() {

              // Apply the changelog to the pack -- this updates machines
              // and the package.json file, and outputs a dictionary
              // of information that we can use to determine what to do next,
              // e.g. whether we need to install any new dependencies
              thisPack.applyPackChangelog({
                changelog: inputs.changelog,
                onNpmInstall: inputs.onNpmInstall,
                onNpmInstallError: inputs.onNpmInstallError,
                onNpmInstallSuccess: inputs.onNpmInstallSuccess,
                dir: inputs.dir,
                treelineApiUrl: inputs.treelineApiUrl
              }).exec({
                error: function (err){
                  return exits.couldNotSync(err);
                },
                success: function (applyPackChangelogResults){

                  // After the pack changelog is applied, apply
                  // the app changelog if the project is an app
                  IfThen.ifThenFinally({
                    bool: type == 'app',
                    then: function(__, exits) {
                      thisPack.applyAppChangelog({
                        changelog: inputs.changelog,
                        dir: inputs.dir,
                        treelineApiUrl: inputs.treelineApiUrl
                      }).exec(exits);
                    },
                    orElse: function(__, exits) {
                      return exits.success();
                    }
                  }).exec({
                    error: exits.couldNotSync,
                    success: function() {

                      // Trigger the `onSyncSuccess` notifier function, if one was
                      // provided.
                      if (inputs.onSyncSuccess) {
                        inputs.onSyncSuccess();
                      }


                      // Trigger notifier function
                      inputs.onNpmInstall();
                      // If any of the pack's NPM dependencies changed, or if inputs.npmInstall is true,
                      // then run a full "npm install" to make sure all NPM dependencies are installed,
                      // but set an environment variable to prevent the postinstall script from installing
                      // Treeline dependencies.  We'll run `installTreelineDeps` manually below so that
                      // the user can see visual feedback as it goes.
                      IfThen.ifThenFinally({
                        bool: (inputs.npmInstall || _.where(inputs.changelog[0].npmDependencies, {verb: 'set'}).length),
                        then: function(__, exits) {
                          process.env.INSTALL_TREELINE_DEPS = 'no';
                          NPM.installDependencies({
                            dir: inputs.dir
                          })
                          .exec({
                            error: function(err) {
                              // Trigger notifier function
                              inputs.onNpmInstallError(err);
                              return exits.error(err);
                            },
                            success: function() {
                              return exits.success();
                            },
                          });
                        },
                        // Otherwise just run the machines that the postinstall script would run.
                        // This saves the overhead that the full "npm install" incurs
                        orElse: function(__, exits) {
                          return exits.success();
                        }
                      }).exec({
                        error: exits.couldNotSync,
                        success: function() {

                          // Sync treeline dependencies
                          thisPack.installTreelineDeps({
                            dir: inputs.dir,
                            treelineApiUrl: inputs.treelineApiUrl,
                            useCachedHashes: !inputs.npmInstall
                          }).exec({
                            error: function(err) {
                              // Trigger notifier function
                              inputs.onNpmInstallError(err);
                              return exits.error(err);
                            },
                            success: function() {
                              // Trigger notifier function
                              inputs.onNpmInstallSuccess();

                              // Finally, flush the Scribe server (for machinepacks) or the preview
                              // server (for apps)
                              IfThen.ifThenFinally({
                                bool: type == 'machinepack',
                                expectedOutput: {},
                                then: function(__, exits) {
                                  // Send a request to `scribe` telling it to flush its require cache
                                  // and pick up the new machinepack files.
                                  if (inputs.previewServerLifted) {
                                    Http.sendHttpRequest({
                                      url: '/',
                                      baseUrl: 'http://localhost:'+inputs.localPort,
                                      method: 'get'
                                    }).exec({
                                      error: exits.error,
                                      success: function(response) {
                                        // Otherwise it worked and we're all good.
                                        return exits.success(applyPackChangelogResults);
                                      }
                                    });
                                  } else {
                                    return exits.success(applyPackChangelogResults);
                                  }

                                },
                                orElse: function(__, exits) {
                                  // Send a request to the preview server telling it to flush its require cache
                                  // and pick up the new machinepack files.
                                  if (inputs.previewServerLifted) {
                                    Http.sendHttpRequest({
                                      url: '/_reload',
                                      baseUrl: 'http://localhost:'+inputs.localPort,
                                      method: 'trace'
                                    }).exec({
                                      error: exits.error,
                                      success: function(response) {
                                        // Otherwise it worked and we're all good.
                                        return exits.success(applyPackChangelogResults);
                                      }
                                    });
                                  } else {
                                    return exits.success(applyPackChangelogResults);
                                  }
                                }
                              }).exec({
                                error: exits.couldNotFlush,
                                success: exits.success
                              });
                            }
                          });

                        }
                      });

                    }

                  });
                }
              });

              }
            });

          }
        });

      });


    }
  });