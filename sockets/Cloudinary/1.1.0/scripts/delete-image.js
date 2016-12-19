var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: inputs.cloudName,
  api_key: inputs.apiKey,
  api_secret: inputs.apiSecret
});
cloudinary.api.delete_resources([inputs.imageId], function(result) {
  if (result.error)
    return exits.error(result.error);
  exits.success();
});