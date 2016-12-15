// Require the Firebase SDK
var Firebase = require('firebase');

// Get the data path reference
var ref = new Firebase(inputs.firebaseURL);

// Attempt to read from the data path
ref.remove(function(error) {

  // Handle errors
  if (error) {
    return exits.error(error);
  }

  // Return through the success exit
  return exits.success();
});