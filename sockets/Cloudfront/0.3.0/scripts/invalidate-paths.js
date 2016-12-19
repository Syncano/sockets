var _ = require('lodash');
var AmazonWebServices = require('aws-sdk');
AmazonWebServices.config.update({
  region: inputs.region||'us-east-1',
  accessKeyId: inputs.accessKeyId,
  secretAccessKey: inputs.secretAccessKey
});

var CloudFront = new AmazonWebServices.CloudFront();

CloudFront.createInvalidation({
  DistributionId: inputs.distribution,
  InvalidationBatch: {
    CallerReference: (new Date()).toString(),
    Paths: {
      Quantity: inputs.paths.length,
      Items: inputs.paths
    }
  }
}, function(err, data) {
  if (err) {
    if (!_.isObject(err)) return exits.error(err);
    console.log(err.code, err.type, err.name);
    if (err.code === 'InvalidClientTokenId') {
      return exits.invalidCredentials();
    }
    if (err.code === 'NoSuchDistribution') {
      return exits.unknownDistribution();
    }
    return exits.error(err);
  }
  return exits.success();
});