# JWT Syncano Socket

It is JWT integration with Syncano. It allows you to work with json web tokens.

## Endpoints

### encode

#### Parameters:

      secret: 'abc123jdhs3h4js',
      payload: undefined,
      algorithm: 'HS256',
      expires: 43200


### decode

#### Parameters:

      secret: 'abc123jdhs3h4js',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ',
      schema: undefined,
      algorithm: 'HS256'

