var tfa = require('2fa');

   // calculate the counter for the HOTP (pretending it's actually TOTP) 
   var counter = Math.floor(Date.now() / 1000 / 30);
  
   // generate a valid code (in real-life this will be user-input) 
   var code = tfa.generateCode(inputs.key, counter);

   return exits.success(code);