# Github Syncano Socket

It is Github integration with Syncano. It allows you to communicate with the github api to get repos, commits, etc.

## Endpoints

### get-user-details

#### Parameters:
```

  user: 'mikermcneil'
```


### create-repo

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy',
  username: 'mikermcneil',
  password: 'l0lcatzz',
  homepage: 'http://node-machine.org/machinepack-foo',
  description: 'A utility for working with direwolves.',
  private: false
```


### list-organization-repos

#### Parameters:
```

  owner: 'balderdashy',
  limit: 30,
  skip: 0,
  username: 'jresig',
  password: 'jqftw'
```


### get-repo

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy'
```


### list-repo-commits-at-path

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy',
  path: 'foo/bar'
```


### list-repo-commits

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy'
```


### list-repo-activity

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy'
```


### list-repos

#### Parameters:
```

  owner: 'balderdashy',
  limit: 30,
  skip: 0
```


### build-installable-url

#### Parameters:
```

  personalAccessToken: 'x32929hghakg1ghdsgkj',
  owner: 'balderdashy',
  repo: 'private-customer-app'
```


### get-login-url

#### Parameters:
```

  clientId: 'abc123jdhs3h4js',
  callbackUrl: 'http://my-cool-app.com/auth/callback',
  scope: public_repo
```


### get-access-token

#### Parameters:
```

  clientId: '215798311808508',
  clientSecret: 'dsg4901g0123456',
  code: 'AQDvCav5zRSafS795TckAerUV53xzgqRyrcfYX2i_PJFObCvACVRP-V7sfemiMPBh3TWypvagfZ6aoqfwKCNcBxg8XR_skdYUe5tsY9UzX9Z_8q4mRrqaLhwSh5OHj9ORmE4ocyd-neZtdceTZjlmEVeO38UH9QOe_md7h5hy2gMhOS6TL9IBk5Guxg3O6I0WmjpFNPoj6JzWIvG9cgj7RQqxMA2q_8EJxGPTqEbmTqOBqqCIOlvPEPCeIiy21VD9__tuzB0JvgqbVh-U_WW8mjwGBqsfxlNvjYwIxk4zBNAxuRJijkkn0TwyogFpZqIlkY',
  callbackUrl: 'http://localhost:1337/user/github/login'
```


### get-current-user

#### Parameters:
```

  accessToken: 'abdg27snhd72'
```


### parse-repo-str

#### Parameters:
```

  string: '/node-machine/machine#master'
```


### build-github-search-string

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy',
  state: 'open',
  lastUpdatedBefore: 1442710858715,
  withAllOfTheseLabels: question,
  withNoneOfTheseLabels: bug,
  type: 'pr'
```


### get-download-url

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy',
  branch: 'master'
```


### list-issue-comments

#### Parameters:
```

  repo: 'sails',
  owner: 'balderdashy',
  issueNumber: 237
```

