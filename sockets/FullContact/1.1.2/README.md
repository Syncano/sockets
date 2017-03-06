# FullContact Syncano Socket

It is FullContact integration with Syncano. It allows you to interact with the fullcontact.com api

## Endpoints

### get-person-from-email

#### Parameters:

      apiKey: '00011122233344455',
      email: 'jane@example.com',
      queue: '1',
      webhookUrl: 'https://mydomain.com/callback/listener',
      webhookId: 'myId',
      webhookBody: 'json'

,
### get-person-from-twitter

#### Parameters:

      apiKey: '00011122233344455',
      twitter: 'janedoe',
      queue: '1',
      webhookUrl: 'https://mydomain.com/callback/listener',
      webhookId: 'myId'

,
### get-person-from-phone

#### Parameters:

      apiKey: '00011122233344455',
      phone: '123-555-4444'

,
### get-person-from-email-md5

#### Parameters:

      apiKey: '00011122233344455',
      emailMD5: 'a4cb1b07d68a3436a190e1559586ae3c',
      queue: '1',
      webhookUrl: 'https://mydomain.com/callback/listener',
      webhookId: 'myId'

,
### get-person-from-facebook

#### Parameters:

      apiKey: '00011122233344455',
      username: 'janedoe',
      id: '123456789',
      queue: '1',
      webhookUrl: 'https://mydomain.com/callback/listener',
      webhookId: 'myId'

