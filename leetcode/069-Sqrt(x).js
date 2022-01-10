var mySqrt = function(x) {
    let left = 1;   ///start from 1;
    let right = x;  //the number we pass in would be the largest value;
    
    if (x < 2) {    //edge case
        return x;
    }
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);  //find the middle point //left + Math.floor((right - left) / 2); 
        if (mid * mid === x) {        //the square root
            return mid;
        } else if (mid * mid > x) {
            right = mid;        //eliminate the right value, and update to the mid pointer
        } else if (mid * mid < x) {
            left = mid + 1;     //eliminate the left value, and update to the mid pointer plus one;
        }
    }
    
    return left - 1;    //decimal digits are truncated, only the integer part is returned
    
};
