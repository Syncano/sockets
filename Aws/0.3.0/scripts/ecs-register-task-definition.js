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
  family: inputs.family
};

if(inputs.volumes) params.volumes = inputs.volumes;

var containerDef;
try {
  containerDef = JSON.parse(inputs.containerDefinitions);
} catch (e) {
  return exits.invalidContainerDefinitions
}

params.containerDefinitions = containerDef
if(!Array.isArray(params.containerDefinitions)) {
  params.containerDefinitions = [containerDef];
}

ecs.registerTaskDefinition(params, function(err, data) {
  if(err) {
    return exits.error(err);
  }

  exits.success(data);
});