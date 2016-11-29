var _ = require('lodash');
var Http = require('machinepack-http');

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  url: '/pokedex/1',
  baseUrl: 'http://pokeapi.co/api/v1'
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
  // OK.
  success: function(result) {

    var pokemons;
    try {
      var parsedResponse = JSON.parse(result.body);
      pokemons = _.map(parsedResponse.pokemon, function (aPokemon){
        // Derive the pokemon's id from the resource_uri
        // (that way it can be used in the `get-pokemon` machine)
        aPokemon.id = +(aPokemon.resource_uri.match(/pokemon\/([0-9]+)/)[1]);
        return aPokemon;
      });
    }
    catch (e) {
      return exits.error(e);
    }

    return exits.success(pokemons);
  },
});