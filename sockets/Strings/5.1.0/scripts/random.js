var Hat = require('hat');

// Provide a pseudo-guarantee of uniqueness by using a process-global "rack" to store past tokens.
// (note this is stored as a proprety of the module exports of this machine-- meaning it is a property on
// the machine def. NEVER COUNT ON THESE TOKENS BEING ANYTHING MORE THAN "PROBABLY" UNIQUE!!)
module.exports._rack = module.exports._rack || Hat.rack();

// Generate and return the new probably-unique token.
var token = module.exports._rack();
return exits.success(token);