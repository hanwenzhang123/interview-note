//Brute Force
var twoSum = function(numbers, target) {
    let index1;
    let index2;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] == target){
                index1 = i + 1;
                index2 = j + 1;
//                 return [i+1, j+1]
            }
        }
    }
    return [index1, index2]
};


//Two Pointers
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        if(numbers[start] + numbers[end] == target){
            return [start+1, end+1];
        } else if (numbers[start] + numbers[end] < target){
            start++
        } else {
            end--;
        }
    }
    return undefined;
};


var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;
    let sum = numbers[p1] + numbers[p2];
    while (sum !== target) {
        if (sum > target) {
            p2--;
        } else {
            p1++;
        }
        sum = numbers[p1] + numbers[p2];
    }
    return [p1 + 1, p2 + 1];
};
 
