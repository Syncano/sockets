var meta = require('machine').build(require('./meta'));

/**
 * Module Dependencies
 */

var program = inputs.program;
// Run
return meta({
  program: program
}, function(error, results) {
  if (error){
    return exits.error(error);
  }
  // Return an object containing myLength and the secretCode
  return exits.success(results.variables);
});