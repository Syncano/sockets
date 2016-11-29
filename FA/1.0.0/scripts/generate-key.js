var tfa = require('2fa');

   // lets generate a new key for a user 
   // tfa.generateKey(length (optional), cb) 
   tfa.generateKey(32, function(err, key) {
     // crypto secure hex key with 32 characters  
     return exits.success(key);
   });