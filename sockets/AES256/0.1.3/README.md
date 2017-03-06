# AES256 Syncano Socket

It is AES256 integration with Syncano. It allows you to aes-256 encrypt and decrypt content with node js crypto api (aes-256)

## Endpoints

### encrypt

#### Parameters:

      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      secret: 'a secure phrase or password',
      buffer: false

,
### decrypt

#### Parameters:

      value: 'cXJYIINixoiZtVE/gKhx/grE5QMWQblr17wxdlTQyR1uSEcVA/iNpOwVbiF3U+6QaUDhbRDK5VEpzS26e/+kLP+NJmcgfqsA5WRHfPQy4TfmzarIUrbL+NsPJm2Gxq+n8KtovheB6YNCqEyvTeB+fbtosSdFkNgUR+u6EFQwbrGF7200zqZx9UMd+1zcTHXxjdOo+EwZlULlpQ52KInPJlTk9FH2G2hgfqx2kotD2/sdTtcqWTZZSssWINJcVNO4cVM56XWfdcwxhQ==',
      secret: 'a secure phrase',
      buffer: false

,
### encrypt-stream

#### Parameters:

      stream: 'a stream',
      secret: 'a secure phrase or password'

,
### decrypt-stream

#### Parameters:

      stream: 'a stream',
      secret: 'a secure phrase or password'

,
### encrypt-stream-file

#### Parameters:

      path: 'file.txt',
      secret: 'a secure phrase or password',
      save: true

,
### decrypt-stream-file

#### Parameters:

      path: 'file.txt.gz',
      secret: 'a secure phrase or password',
      save: true

