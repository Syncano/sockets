var request = require('superagent');

request
.get('http://www.omdbapi.com/')
.query({ 't': inputs.t,
         'y': inputs.y,
         'plot':inputs.plot || "full",
         'r': inputs.r  || "json"
})
.set('Accept', 'application/json')
.end(function(err, data){
    if(!err){
      return  exits.success(data.body)
    }else{
      return exits.notFound(err)
    }
})
.on('error', function(err){
  return exits.error(err)
})