var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: inputs.cloudName,
  api_key: inputs.apiKey,
  api_secret: inputs.apiSecret
});
inputs.options.secure = false;
var http = cloudinary.url(inputs.imageId, inputs.options);
inputs.options.secure = true;
var https = cloudinary.url(inputs.imageId, inputs.options);
exits.success({
  http: http,
  https: https
});