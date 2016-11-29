// Use `path-parse` polyfill for Node <= 0.12
var pathParse = require('path-parse');
return exits.success(pathParse(inputs.path));