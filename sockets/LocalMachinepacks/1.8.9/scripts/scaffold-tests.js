var path = require('path');
var async = require('async');
var Filesystem = require('machinepack-fs');
var Machine = require('machine');

Machine.build(require('./read-package-json'))
.configure({
  dir: inputs.dir
}).exec({
  error: exits.error,
  notMachinepack: exits.notMachinepack,
  success: function (machinepack){

    async.each(machinepack.machines, function (identity, next){

      // Determine the path where the test suite should live
      var pathToTestSuiteJsonFile = path.resolve(inputs.dir, path.join('tests', identity+'.json'));

      // Generate a boilerplate test suite
      var suite = {
        machine: identity,
        expectations: [
        // {
        //   todo: true,
        //   using: {},
        //   outcome: 'success'
        // }
        ]
      };
      // TODO: At some point, come back here and generate a more custom test suite for each machine.
      // (note that we'd have to import the machine definition though)
      // e.g.
      // Generate a test suite for this machine
      // var testSuite = {
      //   machine: identity,
      //   expectations: (function (){
      //     return _.reduce();
      //   })()
      // };

      // And write it to disk as a new JSON file
      // (unless a test already exists w/ the same filename- in that case,
      //  leave it alone and keep moving)
      Filesystem.writeJson({
        json: suite,
        destination: pathToTestSuiteJsonFile
      }).exec({
        // An unexpected error occurred.
        error: function(err) {
          return next(err);
        },
        // OK.
        success: function() {
          return next();
        },
        // A file or folder already exists at the specified `destination`
        alreadyExists: function() {
          return next();
        },
      });

    }, function (err) {
      if (err) return exits.error(err);
      return exits.success();
    });

  }
});