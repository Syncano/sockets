var googleapispagespeedinsights = require('machinepack-googleapispagespeedinsights');

// Run PageSpeed analizer
googleapispagespeedinsights.run(ARGS).exec({

    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    },
    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    }

});
