function (inputs,exits)
{
	var format = '';

	if(inputs.format == 'json')
	{
format = '?format=json';
	}

	var http = require('machinepack-http');

	http.sendHttpRequest({
baseUrl: 'https://api.linkedin.com',
url: '/v1/people/~'+format,
method: 'get',
params:
{
	'Authentication': 'Bearer '+inputs.token
	
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
			return exits.success(response.body);
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


	return exits.success();
}