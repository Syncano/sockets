/**
 * Module Dependencies
 */

// ...

// Return an object containing the commands to run by the generator
return exits.success({
  addNpmPackages: [
    { name: 'bcrypt', target: '~0.8.2'},
    { name: 'express-jwt', target: '~3.0.0'},
    { name: 'jsonwebtoken', target: '~5.0.0'},
  ]
});