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
var loop = inputs.series ? async.mapSeries : async.map;
loop(inputs.array, function(item, cb) {
  var config = {};
  config[workerInputs[0]] = item;
  if (inputs.data && workerInputs.length > 1) {
      config[workerInputs[1]] = inputs.data;
  }
  inputs.worker(config).setEnvironment(env).exec(function(err, output) {
      if (err && err.exit && err.exit.indexOf('success') === 0) {return cb(null, err.output);}
      if (err) {return cb(err);}
      return cb(null, output);
  });
}, exits);