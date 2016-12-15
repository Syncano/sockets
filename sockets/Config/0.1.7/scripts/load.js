var machine = require('machine');
var get = machine.build(require('./get'));
get({path:inputs.path, merge:true, nomethod: true}).exec(function(err, data){
  if(data.multiple){
    var multiple = machine.build(require('./multiple'));
    multiple({schema: data.multiple}).exec(function(err, result){
      return exits.success(result);
    });
  } else {
    get(data).exec(function(err, result){
      return exits.success(result);
    });
  }
});