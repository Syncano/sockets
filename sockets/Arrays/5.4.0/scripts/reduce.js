var _ = require('lodash');
var async = require('async');
var rttc = require('rttc');
var Machine = require('machine');


// `initialValue` is the initial value that will be accumulated/folded "into".
var initialValue;
if (!_.isUndefined(inputs.initialValue)) {
  initialValue = inputs.initialValue;
}
else {
  // If `resultExemplar` is set, determine base/empty value for its type
  // and use that for `initialValue`.
  if (!_.isUndefined(inputs.resultExemplar)) {
    initialValue = rttc.getBaseVal(inputs.resultExemplar);
  }
  // Otherwise, use `null`.
  else {
    initialValue = null;
  }
}

// `resultSoFar` will hold the result accumulated across
// multiple calls to `inputs.iteratee`.
var resultSoFar = initialValue;

// Use either `async.each` (parallel) or `async.eachSeries` (series)
var iteratorFn = inputs.series ? async.eachSeries : async.each;

// `haltEarly` is a flag which is used in the iterations
// below to indicate that all future iterations should be skipped.
var haltEarly = false;

// `numIterationsStarted` will track the number of iterations
// which have been at least started being processed by the iteratee.
var numIterationsStarted = 0;

// `numIterationsSuccessful` will track the number of iterations
// which were successfully completed by the iteratee.
var numIterationsSuccessful = 0;


// Start iterating...
iteratorFn(inputs.array, function enumerator(item, next) {

  // Increment iterations counter and track current index
  var currentIndex = numIterationsStarted;
  numIterationsStarted++;

  // If the `reduce` loop has already been halted, just skip
  // all future iterations.
  if (haltEarly) {
    return next();
  }

  // Execute iteratee machine using generic input configuration
  inputs.iteratee({
    index: currentIndex,
    lastIndex: inputs.array.length-1,
    item: item,
    resultSoFar: resultSoFar
  }).exec({

    // Catchall (error) exit
    // (implies that we should stop early and consider
    //  the entire operation a failure, including all iterations
    //  so far. `reduce` will call its error exit.)
    error: function (err){
      return next(err);
    },

    // Halt exit
    // (implies that we should stop, performing no further
    //  iterations; but that past iterations are ok.
    //  `reduce` will call its success exit)
    halt: function (){
      haltEarly = true;
      return next();
    },

    // Default (success) exit
    // (implies that we should continue iterating)
    success: function enumeratee(_resultSoFar){

      // Track this successful iteration
      numIterationsSuccessful++;

      // Keep track of accumulated result so far
      resultSoFar = _resultSoFar;

      // Next item
      return next();
    }
  });
}, function (err){
  if (err) {
    return exits.error(err);
  }
  return exits.success(resultSoFar);
});