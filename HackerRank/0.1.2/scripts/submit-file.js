var fs = require('fs');

fs.readFile(inputs.filePath , { encoding : 'utf8'} , function(err , data ){
  if(err)
    return exits.error(err);
  else 
  {
    var submit = require("machine").build(require('./submit'));
    submit({
      apiKey : inputs.apiKey ,
      source : data ,
      language : inputs.language ,
      testcases : inputs.testcases , 
      wait : inputs.wait ,
      callbackUrl : inputs.callbackUrl ,
      format : inputs.format
    }).exec({
      error : function(err){
        return exits.error(err);
      } ,
      success : function(result){
        return exits.success(result);
      }
    })
  }
});