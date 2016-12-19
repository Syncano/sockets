var merge = function(arr){
  var arrLength = arr.length;
  if(arrLength < 2 ) return arr; 
  var mid = arrLength / 2 ;
  var left = new Array(Math.floor(mid));
  var right = new Array(Math.floor(arrLength - mid));
  //split the array into two 
  for (var i = 0; i < arr.length; i++){
    if(i < mid ) left[i] = arr[i]; 
    else right[i % left.length ] = arr[i]; 
  }
  //apply merge logic 
  var sortedLeft = merge(left);
  var sortedRight = merge(right);
  return mergeTwoArrays(sortedLeft , sortedRight);         
};

var mergeTwoArrays = function(left,right){
  var leftFlag = 0 ;
  var rightFlag = 0 ;
  var answerArrFlag = 0 ;
  var answerArray = new Array(left.length + right.length);
  while(leftFlag < left.length && rightFlag < right.length ){
    if(left[leftFlag] < right[rightFlag]){
      answerArray[answerArrFlag] = left[leftFlag];
      leftFlag++;
    }else if( right[rightFlag] < left[leftFlag] ){
      answerArray[answerArrFlag] = right[rightFlag];
      rightFlag++;
    }else{
      //both are equal 
      answerArray[answerArrFlag] = left[leftFlag];
      answerArrFlag++; leftFlag++;
      answerArray[answerArrFlag] = right[rightFlag]; rightFlag++;
    }
    answerArrFlag++;
  }
  if(leftFlag == left.length){
   for(var j = rightFlag ; j < right.length ;j++){ 
    answerArray[answerArrFlag] = right[j];answerArrFlag++;
   }
  }else{
     for(var j = leftFlag ; j < left.length ;j++){ 
    answerArray[answerArrFlag] = left[j];answerArrFlag++;
   }
  }
  //console.log(answerArray);
  return answerArray;
}; 
var answer = merge(inputs.array);
return exits.success(answer);