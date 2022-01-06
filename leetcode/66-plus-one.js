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
