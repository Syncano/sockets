/**
 * Module Dependencies
 */

// ...


// Generate a secret code.
var secretCode = ''+(Math.random());

// Get the number of characters in the provided `name`.
var myLength = inputs.name.length;

// Log the provided name and the secret code.
console.log("Hello %s, your secret code is %s", inputs.name, secretCode);

// Return an object containing myLength and the secretCode
return exits.success({
  numLettersInName: myLength,
  secretCode: secretCode
});