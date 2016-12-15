String.prototype.format = function() {
  var formatted = this;
  for( var arg in arguments ) {
      formatted = formatted.replace("{" + arg + "}", arguments[arg]);
  }
  return formatted;
};

var Rx = require('rx');
var RxDOM = require('rx-dom');

var serviceUrl = 'https://spatial.virtualearth.net/REST/v1/data/f22876ec257b474b82fe2ffcb8393150';
var bingDSDefault = 'NAVTEQNA';
var bingPOIDefault = 'NavteqPOIs';

var validate = function(){
     return(input.location.split(',').length == 2);
}

if(!validate(input))
  return exits.error({description: 'request failed validation check'});

var coords = input.location.split(',');

var spatialFilter = "spatialFilter=nearby('{0}','{1}', {2});".format(coords[0], coords[1], input.radius); 
var select = "$select={0};".format(input.select || '*');
var filter = "$filter={0};".format(input.filter || '');
var order = "$orderby={0};".format(input.order || '__Distance');
var top = "$top={0};".format(input.top || 5);

var BingURL = "{0}/{1}/{2}?key={3}&{4}&{5}&{6}&{7}&{8}&$format=json;".format(serviceUrl, 
                                        input.datasourceName || bingDSDefault,
                                        input.poiName || bingPOIDefault,
                                        input.apiKey, spatialFilter, select, top, filter,
                                        order);

RxDOM.jsonpRequest(BingURL)
.subscribe(
  function (response) {
    var bingResponse = {};

    response.forEach(function (item) {
      console.log(item);
    });

    return exits.success();
  },
  function (error) {
    // Log the error
  }
);