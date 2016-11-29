var signedUrl = require('aws-cloudfront-sign').getSignedUrl(inputs.src, {
  keypairId: inputs.keypairId,
  privateKeyString: inputs.privateKey,
  expireTime: (new Date()).getTime() + (inputs.ttl || 24*60*60*1000)
});
return exits.success(signedUrl);