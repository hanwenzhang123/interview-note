var plusOne = function(digits) {
    for (let i = digits.length - 1; i > 0; i--) { //loop over the digits from the end
        if(digits[i] !== 9){
            digits[i]++;
            return digits;      //end the function, return the array
        } else {
            digit[i] = 0;   
        }
    }
    digits.unshift(1);  //when we finish looping for case like [9,9,9]
    return digits;
};

var plusOne = function(digits) {
    let last = digits[digits.length - 1];
    last += 1;
    if(last === 10){
        digits.pop();
        digits.push(1);
        digits.push(0);
    } else {
        digits[digits.length - 1] = last;
    }
    return digits;
};
