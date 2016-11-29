var authClient = new google.auth.JWT(
  inputs.email,
  inputs.keyFile,
  inputs.key || undefined,
  inputs.scopes || [],
  inputs.impersonateEmail || undefined);

authClient.authorize(function(err, tokens) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(tokens);
});