# SoundCloud Syncano Socket

It is SoundCloud integration with Syncano. It allows you to communicate with soundcloud to authenticate, get profile data, tracks, playlists, and more.

## Endpoints

### get-access-token

#### Parameters:

      clientId: 'cb4917402e7e92b3908cfaf84f52fe45',
      clientSecret: 'd0db89af37eef3185a29f0acfed46a9f',
      grantType: authorization_code,
      code: '51edf90c46322a805ada32a33f1cc30f',
      callbackUrl: 'http://localhost:1337/auth/soundcloud/callback'


### get-login-url

#### Parameters:

      clientId: 'abc123jdhs3h4js',
      callbackUrl: 'http://localhost:1337/auth/soundcloud/callback',
      responseType: code,
      scope: 'non-expiring',
      display: 'popup'


### get-current-user

#### Parameters:

      accessToken: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i'

