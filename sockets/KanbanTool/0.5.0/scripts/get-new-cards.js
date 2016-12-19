var format = require("string-format");
	var Client = require("node-rest-client").Client;
	var restClient = new Client();
	
	var fromDate = new Date(inputs.fromDate).toISOString().replace(/\..+/, '');
	var toDate = new Date(inputs.toDate).toISOString().replace(/\..+/, '');

	var apiURLTemplate = "https://{domain}.kanbantool.com/api/v1/boards/{board_id}/changelog.json?api_token={api_token}&from={from_date}&to={to_date}"; // &user_id=user_id&offset=offset&limit=results_limit
	var apiURL = format(apiURLTemplate, {domain: inputs.domain, api_token: inputs.apiToken, board_id: inputs.boardId, from_date: fromDate, to_date: toDate});
	//console.log(apiURL);
	
	restClient.get(apiURL, function(responseText, response){
if(response.statusCode != 200) {
	return response.error({description: "Received error code: " + response.statusCode + " " + response.statusMessage});
}

var results = [];

var data = JSON.parse(responseText);
for(var i = 0; i < data.length; i++) {
	var item = data[i];
	var changelog = item.changelog;
	if(changelog.changed_object_type == "Task" && changelog.what == "created") {
		results.push(changelog.data);
	}
}

return exits.success({
cards: results
});
	});