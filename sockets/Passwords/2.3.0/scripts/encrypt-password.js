require('bcrypt-nodejs').hash(inputs.password, null , null, function(err, hash) {
  if (err) {
    return exits.error(err);
  }
  return exits.success(hash);
});