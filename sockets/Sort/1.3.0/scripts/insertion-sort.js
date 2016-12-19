for(var i = 1 ; i < inputs.array.length ; i++){
  var value = inputs.array[i]; 
  var hole_position = i ;
  while( hole_position > 0 &&  inputs.array[hole_position - 1] > value ){
    inputs.array[hole_position] = inputs.array[hole_position - 1];
    hole_position--;
  }
  inputs.array[hole_position] = value ;      
}
return exits.success(inputs.array);