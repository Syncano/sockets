if (inputs.buffer === true && require('isbuffer')(inputs.value) !== true)
  return exits.error({error: "It's not a valid buffer"});

var algorithm = "aes-256-ctr"
, input_encoding = "hex"
, output_encoding = "utf8";

var decipher = require('crypto').createDecipher(algorithm, inputs.secret);
if (inputs.buffer) {
  res = Buffer.concat([cipher.update(inputs.value),cipher.final()]).toString(output_encoding);
} else {
  res = decipher.update(inputs.value, input_encoding, output_encoding)
      + decipher.final(output_encoding);
}

// Return an a crypted string
return exits.success({
  text: res
});