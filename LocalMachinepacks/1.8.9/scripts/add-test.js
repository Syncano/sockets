var path = require('path');
var _ = require('lodash');
var Util = require('machinepack-util');
var Filesystem = require('machinepack-fs');

var pathToTests = path.resolve(inputs.dir, './tests');
var pathToTestSuite = path.resolve(pathToTests, inputs.identity+'.json');

// Build up new test data
var newExpectation = {
  using: inputs.using,
  outcome: inputs.outcome
};
if (!_.isUndefined(inputs.returns)) {
  newExpectation.returns = inputs.returns;
}
// Add before and/or after stringified fns if relevant
if (inputs.before) {
  newExpectation.before = inputs.before;
}
if (inputs.after) {
  newExpectation.after = inputs.after;
}

// Generate unique string from the provided config (`using`).
var newExpectationConfigHash = Util.hash({
  value: inputs.using,
}).execSync();

// console.log('reading test suite from %s',pathToTestSuite);

// Load test suite from disk, or write a JSON file for it
// if one doesn't already exist
Filesystem.ensureJson({
  path: pathToTestSuite,
  schema: {
    machine: inputs.identity,
    expectations: []
  }
}).exec({
  error: function (err){
    return exits.error(err);
  },
  couldNotParse: function (){
    return exits.corrupted(pathToTestSuite);
  },
  success: function (suite){

    // check each test against the provided config
    var matchingExpectation = _.find(suite.expectations, function (expectation){
      var hash = Util.hash({
        value: expectation.using,
      }).execSync();
      return newExpectationConfigHash === hash;
    });

    // if configs DON'T match, add a new test
    if (!matchingExpectation) {
      delete newExpectation.todo;
      suite.expectations.push(newExpectation);
    }
    // if configs match, update the test expectations
    else {
      delete matchingExpectation.todo;
      matchingExpectation.outcome = newExpectation.outcome;
      if (_.isUndefined(newExpectation.returns)) {
        delete matchingExpectation.returns;
      }
      else {
        matchingExpectation.returns = newExpectation.returns;
      }
      // Add before and/or after stringified fns if relevant
      if (inputs.before) {
        matchingExpectation.before = inputs.before;
      }
      if (inputs.after) {
        matchingExpectation.after = inputs.after;
      }

      // Don't write fns if they don't exist
      if (!matchingExpectation.before) {
        delete matchingExpectation.before;
      }
      if (!matchingExpectation.after) {
        delete matchingExpectation.after;
      }
    }

    // Clean out `todo` test stubs
    suite.expectations = _.reject(suite.expectations, function (expectation){
      return !!expectation.todo;
    });

    // Finally, write test suite back to disk
    Filesystem.writeJson({
      json: suite,
      destination: pathToTestSuite,
      force: true
    }).exec({
      error: exits.error,
      success: function (){
        return exits.success();
      }
    });
  }
});