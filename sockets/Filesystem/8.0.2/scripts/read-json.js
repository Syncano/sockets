var MPJSON = require('machinepack-json');
var thisPack = require('../');

thisPack.read({
  source: inputs.source
}).exec({
  error: exits.error,
  doesNotExist: exits.doesNotExist,
  success: function (contents){
    MPJSON.parse({
      json: contents,
      schema: inputs.schema
    }).exec({
      error: exits.error,
      couldNotParse: exits.couldNotParse,
      success: function (parsedData){
        return exits.success(parsedData);
      }
    });
  }
});