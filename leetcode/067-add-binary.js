var addBinary = function(A, B) {
    let sum = "";
    let carry = 0;
    let i = A.length - 1;   //right most index;
    let j = B.length - 1;   //right most index;
    while( i >= 0 || j >= 0){
        let a = A[i] ? A[i] : "0";
        let b = B[j] ? B[j] : "0";
        sum = String(a ^ b ^ carry) + sum;
        if (a === b && a !== String(carry)){
            carry = Number(!carry);     //not 0, true, not 1, false, then convert to number
        }
        i--;
        j--;
    }
    // if(carry){
    //     sum = String(carry) + sum;
    // }
    return carry ? (String(carry) + sum) : sum;
};

/*
XOR(^) - same: 0, different: 1;
a b c = s c 
0 0 0 = 0 0
0 0 1 = 1 0 <- flip carry, carry changes
1 0 0 = 1 0
1 0 1 = 0 1
1 1 0 = 0 1 <- flip carry, carry changes
1 1 1 = 1 1
*/

var addBinary = function (a, b) {
    let Atail = a.length - 1;
    let Btail = b.length - 1;
    let carry = 0;
    let sum = "";
    while (Atail >= 0 || Btail >= 0 || carry) {
        const digitSum = (+a[Atail] || 0) + (+b[Btail] || 0) + carry;
        carry = Math.floor(digitSum / 2);
        sum = (digitSum % 2) + sum;

        Atail--;
        Btail--;
    }

    return sum;
};


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


var addBinary = function(a, b) {
    let carryover = 0;
    let maxLength = Math.max(a.length, b.length);
    let result = Array(maxLength).fill(0);
    
    let i = 0;
    
    while (i < maxLength) {
        const sum = (a.length - 1 - i < 0 ? 0 : a[a.length - 1 - i] * 1) + (b.length - 1 - i < 0 ? 0 : b[b.length - 1 - i] * 1) + carryover;
        result[maxLength - 1 - i] = sum % 2;    //0 or 1
        carryover = Math.floor(sum / 2);
        i+=1;
    }
    
    if(carryover > 0) {
        result.unshift(1);
    }
    
    return result.join("");
};

 
