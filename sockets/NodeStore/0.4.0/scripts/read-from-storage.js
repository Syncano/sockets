// Making sure we don't wipe the local storage everytime we run this function or try to write to a non-existent location.
if (typeof localStorage === "undefined" || localStorage === null) {

  var LocalStorage = require('node-localstorage').LocalStorage;

  localStorage = new LocalStorage('./scratch');
}

// Retrieving the specific key/value pair.
var kvalue = localStorage.getItem(inputs.key);

// Do we want to output the value as a JSON object
if ( inputs.asJSON === "true" ) {

  var kvalue = localStorage.getItem(inputs.key)
  var kvalue = JSON.parse(kvalue)
}

// Checking the value is actually there...
if (kvalue || kvalue === '') {

 // Finally, we return the value of the key/value pair. 
return exits.success(kvalue);
}

return exits.notFound();