var NLP = require('natural');
var result = (new NLP.NounInflector()).pluralize(inputs.noun);
return exits.success(result);