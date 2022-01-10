let addBinaryManual = (A, B) => {
  
}

var addBinary = function (a, b) {
    let op = '',
        carry = 0;
    let bigger = a.length > b.length ? a : b;
    let smaller = a.length > b.length ? b : a;
    for (let i = bigger.length - 1, j = smaller.length - 1; i >= 0; i--, j--) {
        let sum = parseInt(bigger[i]) + parseInt(smaller[j] || 0) + carry;
        if (sum === 0) {
            carry = 0;
            op = '0' + op;
        } else if (sum === 1) {
            carry = 0;
            op = '1' + op;
        } else if (sum === 2) {
            carry = 1;
            op = '0' + op;
        } else {
            carry = 1;
            op = '1' + op;
        }
    }
    op = carry ? carry + op : op;
    return op;
};

var addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);  
    //toString in base 2 
    //parseInt convert string output number in decimal
};
