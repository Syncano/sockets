for(var i = 0 ; i <= inputs.array.length - 2  ; i++){
  var minimumIndexValue = i ;
  for(var j = i + 1 ; j <= inputs.array.length - 1 ; j++ ){
    if(inputs.array[j] < inputs.array[minimumIndexValue])
      minimumIndexValue = j ;
  }   
  var temp = inputs.array[i];
  inputs.array[i] = inputs.array[minimumIndexValue];
  inputs.array[minimumIndexValue] = temp;  
}

return exits.success(inputs.array);