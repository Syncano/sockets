// Dependencies
var AWS = require('aws-sdk');

var config = {
  accessKeyId: inputs.accessKeyId,
  secretAccessKey: inputs.secretAccessKey,
  region: inputs.region || 'us-west-2',
  apiVersion: inputs.apiVersion || 'latest'
};

// Construct the ECS Service
var ec2 = new AWS.EC2(config);

var params = {
  InstanceIds: inputs.instanceIds
};

if(inputs.nextToken) params.NextToken = inputs.nextToken;
if(inputs.maxResults) params.MaxResults = inputs.maxResults;

ec2.describeInstances(params, function(err, data) {
  if(err) {
    return exits.error(err);
  }

  exits.success(data);
});