if (inputs.bool) {
  inputs.then().exec({
    error: exits.error,
    success: function (result){
      return exits.success(result);
    }
  });
}
else {
  inputs.orElse().exec({
    error: exits.error,
    success: function (result){
      return exits.success(result);
    }
  });
}