function (inputs,exits)
{
	var state = (Math.random() + 1).toString(36).substring(7);
	var util = require('util');

	inputs.scope = inputs.scope || [];

	console.log(inputs.scope);

	try
	{
return exits.success(util.format(
	   'https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=%s&redirect_uri=%s&state=%s&scope=%s',
	   inputs.client_id, inputs.redirecturl, state, inputs.scope.join(',')
	  ));
	}

	catch(e)
	{
return exits.error(e);
	}
}