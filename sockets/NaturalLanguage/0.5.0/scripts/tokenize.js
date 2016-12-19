var TreebankWordTokenizer = require('natural').TreebankWordTokenizer;
var result = (new TreebankWordTokenizer()).tokenize(inputs.string);
return exits.success(result);