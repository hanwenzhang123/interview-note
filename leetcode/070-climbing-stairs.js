// Dynamic Programming
// O(n)
var climbStairs = function(n) { 
    const dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    
    for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n]
};


var climbStairs = function(n) { 
    const dp = [1, 1]
    
    for(let i=2; i<=n; i++){    //looping until the n
        const result = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = result;
//         dp.shift();
//         dp.push(result);
    }
    
    return dp[1]
};

var climbStairs = function(n) { 
    const continuingFunc = (stairsRemaining, savedResults) => {
        if(stairsRemaining < 0){
            return 0;
        }
        if(stairsRemaining === 0){
            return 1;
        }
        if(savedResults[stairsRemaining]){  //when we already have the step value saved in the savedResults map
            return savedResults[stairsRemaining];
        }
        savedResults[stairsRemaining] = continuingFunc(stairsRemaining - 1, savedResults) + continuingFunc(stairsRemaining - 2, savedResults);
        return savedResults[stairsRemaining];
    }
    return continuingFunc(n, {});
};
