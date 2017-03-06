var pokemon = require('machinepack-pokemon');

// List the name and resource_uri for each known Pokemon.
pokemon.listAllPokemon(ARGS).exec({

    
    error: function (response) {
      setResponse(new HttpResponse(500, JSON.stringify(response)));
    },
    
    success: function (response) {
      setResponse(new HttpResponse(200, JSON.stringify(response)));
    }

});
