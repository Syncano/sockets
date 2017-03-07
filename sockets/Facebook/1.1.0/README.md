# Facebook Syncano Socket

It is Facebook integration with Syncano. It allows you to communicate with facebook to authenticate, get profile data, friends, likes, and more.

## Endpoints

### get-access-token

#### Parameters:

      appId: '215798311808508',
      appSecret: 'dsg4901g0123456',
      code: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJFObCvACVRP-V7sfemiMPBh3TWypvagfZ6aoqfwKCNcBxg8XR_skdYUe5tsY9UzX9Z_8q4mRrqaLhwSh5OHj9ORmE4ocyd-neZtdceTZjlmEVeO38UH9QOe_md7h5hy2gMhOS6TL9IBk5Guxg3O6I0WmjpFNPoj6JzWIvG9cgj7RQqxMA2q_8EJxGPTqEbmTqOBqqCIOlvPEPCeIiy21VD9__tuzB0JvgqbVh-U_WW8mjwGBqsfxlNvjYwIxk4zBNAxuRJijkkn0TwyogFpZqIlkY',
      callbackUrl: 'http://localhost:1337/user/facebook/login'


### get-login-url

#### Parameters:

      appId: '215798311808508',
      callbackUrl: 'http://localhost:1337/user/facebook/login',
      permissions: email


### get-user-by-access-token

#### Parameters:

      accessToken: 'CA2Emk9XsJUIBAHB9sTF5rOdNmAXTDjiHxZaZC1GYtFZCcdYGVnLYZB7jZCvensIpGc22yEzN6CL6wtQ9LPVXTNkuP6eQoUQ0toEVPrmTTqDpj0POijBpsuZBnx7jrZCHaTw8leiZBn0R8u6gZAYZAuD77cA3tnDMYvHhrl42CnljROeC9maWoa5zbsT2TZBXdL9wEuGQDSxKqRPyajRw3P3HEK'

