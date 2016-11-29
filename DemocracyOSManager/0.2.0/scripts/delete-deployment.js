request
.del(urljoin(inputs.url, 'deployments', inputs.name))
.send({
  access_token: inputs.access_token
})
.type('application/json')
.accept('application/json')
.end(function(res){
  if (res.ok) return exits.success(res.body, res);
  if (res.body.code) {
    if (res.badRequest) return exits.badRequest(res.body);
    if (res.serverError) return exits.serverError(res.body);
  }
  return exits.error(res);
});