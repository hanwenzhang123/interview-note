//1 is neither prime nor composite and has no prime factors

//Solution #1
var isUgly = function(num) {
    if (num <= 0) return false;
    while (num % 2 == 0) {
        num = num / 2;
    }
    while (num % 3 == 0) {
        num = num / 3;
    }
    while (num % 5 == 0) {
        num = num / 5;
    }
    return (num == 1);
};

//Solution #2
function isUgly(n) {
    switch (true) {
        case n == 0:
            return false
        case n == 1:  
            return true
        case n % 2 == 0:
            return isUgly(n / 2)
        case n % 3 == 0:
            return isUgly(n / 3)
        case n % 5 == 0:
            return isUgly(n / 5)
        default:
            return false
    }
};
