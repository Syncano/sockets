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
  cluster: inputs.cluster || 'default'
};

if(inputs.family) params.family = inputs.family;
if(inputs.nextToken) params.nextToken = inputs.nextToken;
if(inputs.maxResults) params.maxResults = inputs.maxResults;

ecs.listTasks(params, function(err, data) {
  if(err) {
    return exits.error(err);
  }

  exits.success(data);
});