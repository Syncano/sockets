require('bcrypt-nodejs').compare(inputs.passwordAttempt, inputs.encryptedPassword, function(err, ok) {
  if (err) {
    return exits.error(err);
  }
  if (!ok) {
    return exits.incorrect();
  }

  return exits.success();
});