var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    let length = arr[arr.length - 1].length;
    return length;
};

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
