//Solution #1
var addDigits = function (num) {
  let sum = num;
  while (sum >= 10) {
    strArray = sum.toString().split('');
    sum = 0;
    for (let i = 0; i < strArray.length; i++) {
      sum += Number(strArray[i]);
    }
  }
  return sum;
};

//Solution #2
var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

// Pseudo Code:
// 1. Create sum variable.
// 2. While loop for num is greater than or equal to 10.
//   a. Add num % 10 to sum. => remainder -> get the last digit
//   b. Num divide by 10. => the rest from remainder -> get the first digits
//   c. If num is less than 10.
//     i. Add sum to num.
//     ii. Set sum to 0.
// 3. Return num.

var addDigits = function(num) {
    let sum = 0;
    while(num >= 10){
        sum += num % 10;
        num = Math.floor(num/10);
        if(num < 10){
            num += sum;
            sum = 0;
        }
    }
    return num;
};
 
