# Heroku Syncano Socket

It is Heroku integration with Syncano. It allows you to work with the heroku api.

## Endpoints

### add-app-setup

#### Parameters:

      apiToken: 'abc12421-1234-abdc-5343-ae4adf123fea4',
      sourceUrl: 'https://example.com/source.tgz?token=xyz',
      environment: undefined,
      name: 'My awesome app'

,
### list-apps

#### Parameters:

      apiToken: 'abc12421-1234-abdc-5343-ae4adf123fea4'

,
### add-dyno

#### Parameters:

      apiToken: 'abc12421-1234-abdc-5343-ae4adf123fea4',
      app: 'app-123',
      command: 'bash',
      environment: undefined,
      size: '1X'

