# Linkedin Syncano Socket

It is Linkedin integration with Syncano. It allows you to machinepack that communicates and interacts with the linkedin api.

## Endpoints

### get-login-url

#### Parameters:
```

  client_id: '12345678',
  redirecturl: 'https://localhost/url',
  scope: 'r_fullprofile%20r_emailaddress%20w_share'
```


### get-authentication-token

#### Parameters:
```

  code: '1234435',
  redirect_url: 'https://localhost/url',
  client_id: '12345678',
  client_secret: '234643dadfe'
```


### get-profile

#### Parameters:
```

  token: 'asdf23fd23t44f2f3',
  format: 'json'
```

