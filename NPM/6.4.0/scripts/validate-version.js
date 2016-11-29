var _ = require('lodash');
var semver = require('semver');

// Coerce (/validate strict):
//////////////////////////////////////////////////////////////////

// TODO: coerce "almost" version strings, e.g. `1.0`


// Validate:
//////////////////////////////////////////////////////////////////

// Not Blank
//
// i.e. empty string ('')
if (inputs.string.length === 0) {
  return exits.isEmpty();
}

// 20 Characters Max
if (inputs.string.length > 20) {
  return exits.tooLong();
}

// Semantic Version
if (!semver.valid(inputs.string)) {
  return exits.invalidSemanticVersion();
}

// If we made it here, the provided string is valid and good to go!
// (it also might have been coerced a bit)
return exits.success(inputs.string);