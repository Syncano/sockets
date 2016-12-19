// Require NPM package S3
  var s3 = require('s3');

  // Create an upload client, with all the specified settings. 
  var client = s3.createClient({
        maxAsyncS3: 20,     
        s3RetryCount: 3,    
        s3RetryDelay: 1000,  
        multipartUploadThreshold: 20971520, 
        multipartUploadSize: 15728640, 
        s3Options: {
            accessKeyId: inputs.access_key,
            secretAccessKey: inputs.secret_key,

        },
      });

var params = {
    localFile: inputs.upload,


    s3Params: {
      Bucket: inputs.bucket,
      Key: inputs.path,
      ACL: inputs.acl,

    },
    };


  var uploader = client.uploadFile(params);

    uploader.on('error', function(err) {
     return exits.error({
      description: '',
      errorcode: err.stack
     })
    });
    uploader.on('progress', function() {
          console.log("progress", uploader.progressMd5Amount,
          uploader.progressAmount, uploader.progressTotal);
  });

    uploader.on('end', function() {
      return exits.success({
        fileURL: "https://s3.amazonaws.com/" + inputs.bucket + "/" + inputs.path
      })
    });