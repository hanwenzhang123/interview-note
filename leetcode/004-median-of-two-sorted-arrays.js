//Solution #1
var findMedianSortedArrays = function(nums1, nums2) {
  let concat = nums1.concat(num2);
  concat = concat.sort((a, b) => a - b);
  let length = concat.length;
  if(length %2 ===1){ //odd number
    return concat[(length/2) - 0.5]
  } else {  //even event
    return (concat[length/2] + concat[(length/2)-1])/2
  }
}

//Solution #2
var findMedianSortedArrays = function(nums1, nums2) {
    const union = [];
    union.push(...nums1, ...nums2);
    const sortedUnion = union.sort((a,b) => a - b);
    const midcount = sortedUnion.length/2;
    return sortedUnion.length % 2 === 0 ? (sortedUnion[midcount-1] + sortedUnion[midcount])/2 : sortedUnion[Math.ceil(midcount)-1];
};

//Solution #3
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => b -  a);
  const half = Math.floor(mergedArr.length / 2)
  
  if(mergedArr.length % 2) {
    return mergedArr[half]
  }
  
  return (mergedArr[half - 1 ] + mergedArr[half] ) / 2.0;
};
