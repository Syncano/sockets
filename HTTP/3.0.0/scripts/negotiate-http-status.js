if (inputs.statusCode < 200 || inputs.statusCode > 599) {
  return exits.other();
}

if (inputs.statusCode >= 200 && inputs.statusCode < 300) {
  return exits.success();
}

if (inputs.statusCode >= 300 && inputs.statusCode < 400) {
  return exits.redirect();
}

if (inputs.statusCode >= 400 && inputs.statusCode < 500) {
  if (inputs.statusCode === 400) {
    return exits.badRequest();
  }
  if (inputs.statusCode === 401) {
    return exits.unauthorized();
  }
  if (inputs.statusCode === 403) {
    return exits.forbidden();
  }
  if (inputs.statusCode === 404) {
    return exits.notFound();
  }
  return exits.otherClientError();
}

if (inputs.statusCode >= 500 && inputs.statusCode < 600) {
  return exits.serverError();
}

return exits.other();