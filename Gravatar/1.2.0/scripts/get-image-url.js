// Depedencies
var Crypto = require('crypto');
var qs = require('querystring');
var _ = require('lodash');

// Strip out any keys which don't have a truthy value so as not to confuse `qs.stringify`.
var qsParams = _.pick({

  // "s" stands for gravatar "size"
  // (cast to string if exists)
  s: inputs.gravatarSize ? inputs.gravatarSize+'' : undefined,

  // "d" stands for "default image".
  // If defaultImage src was provided, encode it for use in a URI
  d: inputs.defaultImage ? inputs.defaultImage : undefined,

  // Removed support for "forceDefaultImage"
  // if this is important for some reason, it can be brought back.
  // However it seems more confusing than anything else.
  //
  // "f" stands for "force default image".
  // Set up the "y" that Gravatar expects to indicate we're "forcing" the default image.
  // f: inputs.forceDefaultImage ? 'y' : undefined,

  // "rating" refers to "G", "PG", "R", "X", etc.
  rating: inputs.rating || undefined
}, function _isTruthy(val) { return !!val; });


// Stringify the querystring parameters that will be sent to gravatar
var stringifiedQsParams;
try {
  stringifiedQsParams = qs.stringify(qsParams);
}
catch (e){
  return exits.encodingFailed(e);
}

// Build the gravatar hash from the provided email address and compute the base url
var gravatarHash = Crypto.createHash('md5').update(inputs.emailAddress.replace(/\s/,'').toLowerCase().trim()).digest('hex');
var gravatarBaseUrl = 'www.gravatar.com/avatar/' + gravatarHash + '?' + stringifiedQsParams;

if (inputs.useHttps) {
  return exits.success('https://'+gravatarBaseUrl);
}
// Otherwise just use `http://`
return exits.success('http://'+gravatarBaseUrl);