request
.post(urljoin(inputs.url, 'deployments'))
.type('application/json')
.accept('application/json')
.send({
  access_token: inputs.access_token,
  deployment: {
    name: inputs.name,
    title: inputs.title,
    owner: inputs.owner,
    summary: inputs.summary,
  }
})
.end(function(res){
  if (res.ok) return exits.success(res.body, res);
  if (res.body.code) {
    if (res.badRequest) return exits.badRequest(res.body);
    if (res.serverError) return exits.serverError(res.body);
  }
  return exits.error(res);
});