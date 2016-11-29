var rttc = require('rttc');
var thisPack = require('../');

thisPack.readJson({
  source: inputs.path,
  schema: inputs.schema
}).exec({
  error: function (err){
    return exits.error(err);
  },
  couldNotParse: function (parseErr){
    return exits.couldNotParse(parseErr);
  },
  doesNotExist: function (){
    try {
      // If the JSON file does not exist, create it using the base value
      // for the provided schema.
      var baseVal = rttc.coerce(rttc.infer(inputs.schema));
      thisPack.writeJson({
        destination: inputs.path,
        json: baseVal
      }).exec({
        error: function (err){
          return exits.error(err);
        },
        success: function (){
          return exits.success(baseVal);
        }
      });// </writeJson>
    }
    catch (e) {
      return exits.error(e);
    }
  },//</readJson.doesNotExist>
  success: function (data){
    return exits.success(data);
  }//</readJson.success>
});//</readJson>