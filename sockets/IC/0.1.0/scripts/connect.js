// {{{2
var request = require('request');

// validate inputs and set defaults
inputs.protocol = (inputs.protocol || 'https').toLowerCase();
if (inputs.protocol !== 'http' && inputs.protocol !== 'https')
{
  return exits.invalidProperty({name: 'protocol', message: 'protocol is invalid. Valid values are: http, https' });
}
inputs.port     = inputs.port || (inputs.protocol === 'http' ? 8018 : 8019);
inputs.language = inputs.language || 'en-US'; // TODO: if language is null => system language?!?

//if (inputs.marketPlaceApplicationLicenseName.length > 0)

console.log('Connecting to ' + inputs.server + ' as ' + inputs.userID);

request.post(
  {
    url:     inputs.protocol + '://' + inputs.server + ':' + inputs.port + '/icws/connection',
    headers: {
      'Accept-Language': inputs.language,
    },
    json: {
      __type:          'urn:inin.com:connection:icAuthConnectionRequestSettings',
      applicationName: inputs.applicationName,
      userID:          inputs.userID,
      password:        inputs.password,
      marketPlaceApplicationLicenseName: inputs.market_license,
      marketPlaceApplicationCode:        inputs.market_code,
    },
  },
  function onResponseReceived(error, response, body) {
    if (error)
    {
      return exits.error(error);
    }
    console.log('Status: ' + response.statusCode);
    if (response.statusCode >= 300 || response.StatusCode < 200)
    {
      var error_info = {
        __type:    'urn:inin.com:common:unknownError',
        errorId:   'error.request.unknownError',
        errorCode: -1,
        message:   'Unknown error'
      };

      if (body.length > 0) // TODO: Also check the content-type
      {
        try
        {
          error_info = JSON.parse(body);
        }
        catch(e)
        {
          console.log("Body was not a JSON object.
" + e);
          error_info.message = body;
        }
      }
      switch(response.statusCode)
      {
        case 400: // Bad Request
          console.log("Error 400: Bad Request
Original error: " + body);
          if (error_info.__type === 'urn:inin.com:common:missingPropertyError')
          {
            return exits.missingProperty({ name: error_info.propertyName, message: error_info.message });
          }
          else if (error_info.errorId === 'error.request.invalidRepresentation.invalidProperty')
          {
            return exits.invalidProperty({ message: error_info.message });
          }
          else
          {
            return exits.icws_error(error_info);
          }
          break;
        case 410: // Gone
          console.log("Error 410: Gone
Original error: " + body);
          return exits.deprecatedResource({ name: 'disconnect', message: error_info.message });
          break;
        case 500: // Internal Server Error
          console.log("Error 500: Internal Server Error
Original error: " + body);
          return exits.icws_error(error_info);
          break;
        case 503: // Service Unavailable
          console.log("Error 503: Service Unavailable
Original error: " + JSON.stringify(body));
          if (error_info.errorId === 'error.server.notAcceptingConnections')
          {
            console.log('server ' + inputs.server + ' is not accepting connections. Alternates: [' + error_info.alternateHostList.join() + ']');
            return exits.notAcceptingConnections({ alternateHosts: error_info.alternateHostList, message: error_info.message });
          }
          else if (error_info.errorId === 'error.server.unavailable')
          {
            console.log('server ' + inputs.server + ' is not available. Alternates: [' + error_info.alternateHostList.join() + ']');
            return exits.serverUnavailable({ alternateHosts: error_info.alternateHostList, message: error_info.message });
          }
          else
          {
            console.log('Unknown error ' + response.statusCode + ' when connecting to server ' + server);
            return exits.icws_error(error_info);
          }
          break;
        default: // Other errors
          console.log("Error " + response.statusCode + "
Original error: " + JSON.stringify(body));
          return exits.error(error_info);
      }
    }
    console.log('Connected to ' + inputs.server + ' as ' + body.userID);
    for (i=0; i < response.headers['set-cookie'].length; i++)
    {
      var cookie = response.headers['set-cookie'][i];

      if (cookie.search(/^icws_/) > -1)
      {
      console.log('>> ' + JSON.stringify(body));
        return exits.success({
          url:            inputs.protocol + '://' + inputs.server + ':' + inputs.port + '/icws',
          icserver:       body.icServer,
          id:             body.sessionId,
          token:          body.csrfToken,
          cookie:         cookie,
          alternateHosts: body.alternateHostList,
          user:           { id: body.userID, display: body.userDisplayName },
          language:       inputs.language,
        });
      }
    }
    return exits.error({ message: 'Missing ICWS Cookie in response' });
  }
);