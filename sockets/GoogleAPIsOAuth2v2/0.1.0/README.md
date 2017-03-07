# GoogleAPIsOAuth2v2 Syncano Socket

It is GoogleAPIsOAuth2v2 integration with Syncano. It allows you to work with google oauth2 api

## Endpoints

### get-login-url

#### Parameters:

      clientId: '284875887706-4gku5u85022s3cbsde5rpvps88ekcfql.apps.googleusercontent.com',
      clientSecret: 'SomeSuperSecretKey',
      redirectUrl: 'http://localhost:1337/user/google/login',
      scope: https://www.googleapis.com/auth/plus.me,
      accessType: 'offline'


### get-access-token

#### Parameters:

      clientId: '284875887706-4gku5u85022s3cbsde5rpvps88ekcfql.apps.googleusercontent.com',
      clientSecret: 'SomeSuperSecretKey',
      redirectUrl: 'http://localhost:1337/user/google/login',
      code: 'someSuperCodeYouGotFromGoogle'


### get-oauth2-client

#### Parameters:

      clientId: '284875887706-4gku5u85022s3cbsde5rpvps88ekcfql.apps.googleusercontent.com',
      clientSecret: 'SomeSuperSecretKey',
      redirectUrl: 'http://localhost:1337/user/google/login'

