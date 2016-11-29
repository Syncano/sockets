var _ = require('lodash');
var async = require('async');

// Use either `async.map` (parallel) or `async.mapSeries` (series)
var iteratorFn = inputs.series ? async.mapSeries : async.map;

// `numIterationsStarted` will track the number of iterations
// which have been at least started being processed by the iteratee.
var numIterationsStarted = 0;

// Track the index of all iterations which trigger the `exclude` exit.
var excludedIndices = [];

// Start iterating...
var indices = _.keys(inputs.array);
iteratorFn(indices, function enumerator(currentIndex, next) {

  // We iterate over indices instead of the items themselves to avoid
  // parallel execution throwing us off.
  var item = inputs.array[currentIndex];

  // Increment iterations counter
  numIterationsStarted++;

  // Execute iteratee machine using generic input configuration
  inputs.iteratee({
    index: currentIndex,
    lastIndex: inputs.array.length-1,
    item: item
  }).exec({

    // Catchall (error) exit
    // (implies that we should stop early and consider
    //  the entire operation a failure, including all iterations
    //  so far. `map` will call its error exit.)
    error: function (err){
      return next(err);
    },

    // Exclude (skip item) exit
    // (implies that we should exclude this item from the result set)
    exclude: function (){
      excludedIndices.push(currentIndex);
      next();
    },

    // Default (success) exit
    // (implies that we should continue iterating)
    success: function enumeratee(output){
      return next(null, output);
    }
  });
}, function (err, transformedArray){
  if (err) {
    return exits.error(err);
  }

  // Remove items that were skipped above.
  if (excludedIndices.length > 0) {
    var retainedIndices = _.difference(indices, excludedIndices);
    transformedArray = _.at(transformedArray, retainedIndices);
  }

  return exits.success(transformedArray);
});