var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: inputs.cloudName,
  api_key: inputs.apiKey,
  api_secret: inputs.apiSecret
});

var files = [];
var errors = [];

function receive() {
  var receiver__ = require('stream').Writable({ objectMode: true });
  receiver__._write = function onFile(__newFile, _unused, done) {
    var uploadStream = cloudinary.uploader.upload_stream(function(result) {
      if (result && result.error) {
        errors.push(result.error);
        return done();
      }
      files.push(result);
      done();
    }, inputs.imageOptions);
    uploadStream.on('error', function (err) {
      errors.push({ message: 'Error on uploading the image, try again.' });
      return done();
    });
    __newFile.pipe(uploadStream);
  };
  return receiver__;
}

var filesStream = env.req.file(inputs.fieldName);
filesStream.upload(receive(), function (err) {
  if (err) return exits.error(err);
  if (errors.length && !files.length) return exits.error(errors);
  exits.success(files);
});