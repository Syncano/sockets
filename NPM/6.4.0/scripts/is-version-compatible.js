var semver = require('semver');

var isCompatible = semver.satisfies(inputs.version, inputs.semverRange);

// Note:
// Just in case this is not strictly `true` or `false`, we might consider casting it
// to a boolean here.  But since we know that machine/rttc take care of that for us,
// we can skip this extra step.
// isCompatible = !!isCompatible;

return exits.success(isCompatible);