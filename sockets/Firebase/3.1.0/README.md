# Firebase Syncano Socket

It is Firebase integration with Syncano. It allows you to this machinepack lets you commuicate with the firebase api to store and sync your data in realtime.

## Endpoints

### set-data

#### Parameters:

      firebaseURL: 'your-firebase-database.firebaseio.com',
      child: 'users',
      write: undefined


### push-data

#### Parameters:

      firebaseURL: 'your-firebase-database.firebaseio.com',
      child: 'users',
      write: undefined


### update-data

#### Parameters:

      firebaseURL: 'your-firebase-database.firebaseio.com/users',
      child: 'users',
      write: undefined


### read-value

#### Parameters:

      firebaseURL: 'your-firebase-database.firebaseio.com/users/'


### json-to-string

#### Parameters:

      object: '{ "User 1": {"email": "user@gmail.com", "password": "password123"}}'


### string-to-json

#### Parameters:

      string: '{ "User 1": {"email": "user@gmail.com", "password": "password123"}}'


### remove-value

#### Parameters:

      firebaseURL: 'your-firebase-database.firebaseio.com/users/'

