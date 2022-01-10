var merge = function(nums1, m, nums2, n) {
    //2 pointers based on m and n
    let first = m-1;    //the index is 0 based
    let second = n-1;   //the index is 0 based 
    
    for (let i = m + n - 1; i >= 0; i--) {      //move backwards,  i = m + n - 1 starts with correct index in first num1 array
        if (second < 0){        //when p2 is less than 0, then break out the loop.
            break;
        }
        if (nums1[first] > nums2[second]){
            nums1[i] = nums1[first];    //update nums1[i] with current p1 pointer value
            first--;
        } else { 
            nums1[i] = nums2[second];    //update nums1[i] with current p2 pointer value
            second--;
        }
    }
};
