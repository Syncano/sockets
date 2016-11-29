/**
 * Module Dependencies
 */

// ...

// Return an object containing the commands to run by the generator
return exits.success({
  addEmberAddons: [
  { name: 'ember-cli-simple-auth', target: '~0.7.3'},
  { name: 'ember-cli-simple-auth-oauth2', target: '~0.7.3'}
  ],
  addToConfig: {
    ENV : {
      'simple-auth': {
        authorizer: 'simple-auth-authorizer:oauth2-bearer'
      },
      'simple-auth-oauth2': {
        serverTokenEndpoint: '/api/v1/auths/login',
        serverTokenRevocationEndpoint: '/api/v1/auths/logout',
      }
    }
  },
  //runs ember generate <type> <name> <parameters> command for each object in the array
  generates: [{
    type: 'model',
    name: 'user',
    parameters: 'username:string'
  },
  {
    type: 'template',
    name: 'user'
  }]
});