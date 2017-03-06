# Dictionaries Syncano Socket

It is Dictionaries integration with Syncano. It allows you to work with dictionaries.

## Endpoints

### merge

#### Parameters:

      primary: [object Object],
      secondary: [object Object]

,
### construct

#### Parameters:

      dictionary: [object Object]

,
### dot

#### Parameters:

      dictionary: [object Object],
      keypath: 'mom.email'

,
### delete-key

#### Parameters:

      dictionary: [object Object],
      key: 'password'

,
### rename-key

#### Parameters:

      dictionary: [object Object],
      originalKey: 'studentName',
      newKey: 'studentFullName',
      force: true

,
### copy-key

#### Parameters:

      dictionary: [object Object],
      originalKey: 'githubUsername',
      newKey: 'twitterUsername',
      force: true

,
### add-key

#### Parameters:

      dictionary: [object Object],
      newKey: 'twitterUsername',
      value: '*',
      force: true

,
### keys

#### Parameters:

      dictionary: [object Object]

