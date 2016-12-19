// Making sure we don't wipe the local storage everytime we write to it.
if (typeof localStorage === "undefined" || localStorage === null) {

  var LocalStorage = require('node-localstorage').LocalStorage;

  localStorage = new LocalStorage('./scratch');
}

var kvalue = localStorage.getItem(inputs.key);

// Checking the value is actually there...
if (kvalue || kvalue === '') {
  localStorage.removeItem(inputs.key)
return exits.success(kvalue);
}

return exits.notFound();