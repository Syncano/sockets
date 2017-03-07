# Salesforce Syncano Socket

It is Salesforce integration with Syncano. It allows you to communicate with the salesforce api to get profiles, accounts, contacts, etc.

## Endpoints

### get-login-url

#### Parameters:

      consumerKey: 'adf90878aKsloewurSDFIUFsdisoufsodfu',
      callbackUrl: 'http://localhost:1337/auth/login'


### get-access-token

#### Parameters:

      consumerKey: 'adf90878aKsloewurSDFIUFsdisoufsodfu',
      consumerSecret: 'dsg4901g0123456',
      callbackUrl: 'http://localhost:1337/auth/login',
      code: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJF9QOe_md7h5hy2gMhOS6TL9IBk5qxMA2q_8EJxGPTqEbmTqOBqqCIOlvPEPCeIiy21VD9_Y'


### get-user-by-access-token

#### Parameters:

      id: 'https://login.salesforce.com/id/29ZXzEAM/005j0Xz00C7enEAM/00000C7enf00C7enAAB',
      accessToken: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJF9QOe_md7h5hy2gMhOS6TL9IBk5qxMA2q_8EJxGPTqEbmTqOBqqCIOlvPEPCeIiy21VD9_Y',
      tokenType: 'Bearer'

