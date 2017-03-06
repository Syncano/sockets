# Cloudfront Syncano Socket

It is Cloudfront integration with Syncano. It allows you to node.js wrapper for aws cloudfront.

## Endpoints

### sign-cloudfront-url

#### Parameters:

      keypairId: 'APKAJU5MWXIKYDV3YILQ',
      privateKey: '-----BEGIN RSA PRIVATE KEY-----
MIIEow......
-----END RSA PRIVATE KEY-----',
      src: 'http://cloudfront.net/path/to/thing.jpg',
      ttl: 3600

,
### invalidate-paths

#### Parameters:

      accessKeyId: 'BJIBJB5SF3Z5QQDJFHHX',
      secretAccessKey: 'JOpq29vhaJ2VVae2jfkN/+z9/ulqRzd',
      region: 'us-east-1',
      distribution: 'E672U0C5WS3M1',
      paths: /images/foobar.jpg

