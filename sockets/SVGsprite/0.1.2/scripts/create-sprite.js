var svg-sprite = require('machinepack-svg-sprite');

// Create an SVGs sprite from multiple SVG source files.
svg-sprite.createSprite(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
