var async = require('async');
// Get the name of the first input to the worker
// TODO: replace this with "typeclass: machine" type checking
if (!inputs.worker.inputs || typeof inputs.worker.inputs != 'object') {
  return exits.error("Worker misconfigured: no inputs object found");
}
var workerInputs = Object.keys(inputs.worker.inputs);
if (workerInputs.length === 0) {
  return exits.error("Worker misconfigured: inputs object empty");
}
var loop = inputs.series ? async.eachSeries : async.each;
loop(inputs.array, function(item, cb) {
  var config = {};
  config[workerInputs[0]] = item;
  inputs.worker(config).exec(cb);
}, exits);