var value = env.req.session[inputs.key];
if (value || value === ''){
  return exits.success(value);
}
return exits.notFound();