// Require the Firebase SDK
var Firebase = require('firebase');

// Get the data path reference
var ref = new Firebase(inputs.firebaseURL);

// Attempt to read from the data path
ref.once("value", function(snapshot) {

  // Return the data as a JSON string through the success exit
  return exits.success(JSON.stringify(snapshot.val()));
},

// In case of error, send the error throuh the error exit
function(errorObject) {
    return exits.error(errorObject);
});