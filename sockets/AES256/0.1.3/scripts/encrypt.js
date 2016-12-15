if (inputs.buffer && require('isbuffer')(inputs.value) !== true)
  return exits.error({error: "It's not a valid buffer"});

var algorithm = "aes-256-ctr"
, input_encoding = "utf8"
, output_encoding = "hex"
, res = null;

var cipher = require('crypto').createCipher(algorithm, inputs.secret)
if (inputs.buffer) {
  res = Buffer.concat([cipher.update(inputs.value),cipher.final()]);
} else {
  res = cipher.update(inputs.value, input_encoding, output_encoding)
      + cipher.final(output_encoding);
}

// Return an a crypted string
return exits.success({
  text: res
});