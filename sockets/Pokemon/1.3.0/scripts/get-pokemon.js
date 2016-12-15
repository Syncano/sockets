var _ = require('lodash');
var Http = require('machinepack-http');

// Send an HTTP request and receive the response.
Http.sendHttpRequest({
  url: '/pokemon/'+inputs.id,
  baseUrl: 'http://pokeapi.co/api/v1'
}).exec({
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
  // OK.
  success: function(result) {

    var pokemon;
    var spriteId;
    var descriptionId;
    try {
      var parsedResponse = JSON.parse(result.body);
      // console.log(parsedResponse);
      pokemon = {
        name: parsedResponse.name,
        types: _.pluck(parsedResponse.types, 'name'),
        moves: _.sortBy(_.where(parsedResponse.moves, {learn_type: 'level up'}), 'level')
      };
      // Ensure that a sprite id exists
      if (!parsedResponse.sprites[0] || !_.isObject(parsedResponse.sprites[0])) {
        return exits.error(new Error('No image available for this pokemon.'));
      }
      spriteId = +(parsedResponse.sprites[0].resource_uri.match(/sprite\/([0-9]+)/)[1]);

      // Ensure that a primary description id exists and parse it out
      if (!parsedResponse.descriptions[0] || !_.isObject(parsedResponse.descriptions[0])) {
        return exits.error(new Error('No description available for this pokemon.'));
      }
      descriptionId = +(parsedResponse.descriptions[0].resource_uri.match(/description\/([0-9]+)/)[1]);

    }
    catch (e) {
      return exits.error(e);
    }

    // Fetch the primary image url for this pokemon
    // using the 'sprites' that were provided.
    Http.sendHttpRequest({
      url: '/sprite/' + spriteId,
      baseUrl: 'http://pokeapi.co/api/v1'
    }).exec({
      // An unexpected error occurred.
      error: function(err) {
        return exits.error(err);
      },
      // OK.
      success: function(result) {
        try {
          var parsedSpriteResponse = JSON.parse(result.body);
          // Note that we strip the leading slash, and ensure that one exists.
          var spriteImageUrl = 'http://pokeapi.co/' + parsedSpriteResponse.image.replace(/^\//, '');

          // Now set the pokemon imageUrl using the relevant info from the
          // parsed sprite response.
          pokemon.imageUrl = spriteImageUrl;
        }
        catch (e) {
          return exits.error(e);
        }

        // Fetch the primary description for this pokemon.
        Http.sendHttpRequest({
          url: '/description/' + descriptionId,
          baseUrl: 'http://pokeapi.co/api/v1'
        }).exec({
          error: function (err){
            return exits.error(err);
          },
          success: function (result){
            try {
              var parsedDescriptionResponse = JSON.parse(result.body);

              // Now set the pokemon description using the relevant info from the
              // parsed description response.
              pokemon.description = parsedDescriptionResponse.description;
            }
            catch (e) {
              return exits.error(e);
            }

            return exits.success(pokemon);
          },
        });
      }
    });
  },
});