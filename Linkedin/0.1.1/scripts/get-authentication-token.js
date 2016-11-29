function (inputs,exits)
{
	var http = require('machinepack-http');

	http.sendHttpRequest({
baseUrl: 'https://www.linkedin.com',
url: '/uas/oauth2/accessToken',
method: 'post',
params:
{
	'grant_type': 'authorization_code',
	'code' : inputs.code,
      'redirect_uri' : inputs.redirect_url,
	'client_id' : inputs.client_id,
	'client_secret' : inputs.client_secret

},
headers:
{
	'Content-Type' : 'application/x-www-form-urlencoded',
}

	}).exec(
{
	success: function(response)
	{
		try
		{
			var data = JSON.parse(response.body);

			return exits.success(data);

		}
		catch(e)
		{
			return exits.error(e);
		}

	},

	error: function(err)
	{
		return exits.error(err);
	}
}
	);

}