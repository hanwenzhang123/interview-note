const binarySearch = function(array, target){
  let left = 0, right = array.length - 1;
  while(left <= right){
    const mid = Math.floor((left + right) / 2);
    const foundValue = array[mid];
    if(foundValue === target){
      return mid;
    } else if(foundValue < target){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
