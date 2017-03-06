var pokemon = require('machinepack-pokemon');

// Get information about a Pokemon based on its unique ID number
pokemon.getPokemon(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
