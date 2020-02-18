function bubbleSort(array){
  if(array.length <= 1){
    return array;
  }
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        const arr = swap(array[j], array[j + 1]);
        array[j] = arr[0];
        array[j+1] = arr[1];
      }
    }
  }

return array;
}



function swap(first, next){
  return [next, first];

}






