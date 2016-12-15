var _ = require('lodash');
var AzureCompute = require('azure-mgmt-compute');

var azureClient = AzureCompute.createComputeManagementClient(AzureCompute.createCertificateCloudCredentials({
  subscriptionId: inputs.subscriptionId,
  pem: inputs.certificate
}));

azureClient.virtualMachineOSImages.list(function (err, result) {
  if (err) {
    if (!_.isObject(err)) return exits.error(err);
    if (err.code === 'ForbiddenError') {
      return exits.forbidden(err);
    }
    // console.log(err.code,err.type,err.name,err);
    return exits.error(err);
  }

  return exits.success(result);
});