// Require the Firebase SDK
var Firebase = require('firebase');

// Get the root reference
var rootRef = new Firebase(inputs.firebaseURL);

// If a child path is specified, get a reference to that data path
var finalRef = inputs.child ? rootRef.child(inputs.child) : rootRef;

// Set the data at the path
finalRef.update(inputs.write, function(error) {

  // Handle errors
  if (error) {
    return exits.error(error);
  }

  // Return success
  return exits.success();
});