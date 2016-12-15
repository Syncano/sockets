var semver = require('semver');

var comparison = semver.compare(inputs.a, inputs.b);

return exits.success(comparison);