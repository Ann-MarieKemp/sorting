function split(array){
  const mid = Math.floor(array.length / 2)
  let first = array.slice(0, mid);
  let second = array.slice(mid);
  return [first, second];
}

function merge(first, second){
  const returnArr = [];
  let firstIdx = 0;
  let secondIdx = 0;
  while(firstIdx < first.length && secondIdx < second.length){
    if(first[firstIdx] > second[secondIdx]){
      returnArr.push(second[secondIdx]);
      secondIdx ++;
    }
    else{
      returnArr.push(first[firstIdx]);
      firstIdx++;
    }
  }
  return returnArr.concat(first.slice(firstIdx)).concat(second.slice(secondIdx));
}

function mergeSort(array){
  let splitArr = [];
  let firstHalf;
  let secondHalf;
  if(array.length <= 1){
    return array;
  }else{
    splitArr =  split(array);
    // splitArr = split(array);
    firstHalf = splitArr[0];
    // console.log(firstHalf)
   secondHalf = splitArr[1];
    // mergeSort(firstHalf);
  }
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
