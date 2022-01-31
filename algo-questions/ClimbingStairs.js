// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function(n) {
    if(n < 4) {
        return n
    }
    
    let arr = [0, 1, 2]
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr [i - 2]
    }
    
    return arr[n]
};
