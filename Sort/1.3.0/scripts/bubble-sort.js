for(var i = 0 ; i < inputs.array.length - 1 ; i++ ){
  for(var j = 0 ; j < inputs.array.length - i - 1; j++){
    if(inputs.array[j] > inputs.array[j+1]){
      var temp = inputs.array[j];
      inputs.array[j] = inputs.array[j + 1];
      inputs.array[j + 1] = temp ; 
    }
  }
}

return exits.success(inputs.array);