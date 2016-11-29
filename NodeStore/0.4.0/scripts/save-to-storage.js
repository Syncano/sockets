// Making sure we don't wipe the local storage everytime we write to it.
if (typeof localStorage === "undefined" || localStorage === null) {

  var LocalStorage = require('node-localstorage').LocalStorage;

  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem(inputs.key, inputs.value);


// Let the server know the data has been saved successfully and return the approproate exit.
return exits.success(inputs.value);