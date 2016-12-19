// Require the Firebase SDK
var Firebase = require('firebase');

// Get the root reference
var rootRef = new Firebase(inputs.firebaseURL);

// If a child path is specified, get a reference to that data path
var finalRef = inputs.child ? rootRef.child(inputs.child) : rootRef;

// Create a new data reference
var dataRef = finalRef.push(inputs.write, function(error) {

    // Handle errors
    if (error) {
      return exits.error(error);
    }

    // Get the unique ID of the new data path
    var key = dataRef.key();

    // Return it through the success exit
    return exits.success(key);
  });