// Dependencies
var AWS = require('aws-sdk');

var config = {
  accessKeyId: inputs.accessKeyId,
  secretAccessKey: inputs.secretAccessKey,
  region: inputs.region || 'us-west-2',
  apiVersion: inputs.apiVersion || 'latest'
};

// Construct the ECS Service
var ecs = new AWS.ECS(config);

var params = {
  cluster: inputs.cluster || 'default',
  containerInstances: inputs.containerInstances
};

ecs.describeContainerInstances(params, function(err, data) {
  if(err) {
    return exits.error(err);
  }

  exits.success(data);
});