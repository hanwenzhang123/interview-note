// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

var countBits = function(n) {
    let dp = [0 , 1]
    let offset = 1
    
    if(!n) {
        return [0]
    }
    
    for(let i = 2; i <= n; i++) {
        if(offset * 2 == i) {
            offset = i
        }
        dp[i] = 1 + dp[i - offset]
    }
    
    return dp
};