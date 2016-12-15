var NLP = require('natural');
var result = (new NLP.NounInflector()).singularize(inputs.noun);
return exits.success(result);