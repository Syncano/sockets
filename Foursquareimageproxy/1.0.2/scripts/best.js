/**  
Control Flow:
* Verify Inputs -> Return if there is an error
* Connect to foursquare API to get the venue response
* parse and return the URL string
*/

Foursquare.getVenue(inputs).exec({
  // An unexpected error occurred.
  error: function(err) {
    return exits.error(err);
  },
  // OK.
  success: function(output) {
    var venue = output.venue;
    if(typeof venue === 'undefined'){
      return exits.error('venue not found');
    }
    var size = inputs.size || "width640";
    var returnValue = venue.bestPhoto.prefix + size + venue.bestPhoto.suffix;
    return exits.success(returnValue);
  },
});