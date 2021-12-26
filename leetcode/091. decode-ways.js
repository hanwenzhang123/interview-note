A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"a" = 1
"b" = 2
"c" = 3
...
"z" = 26
"ab" = "12"
"12" = "l"
"3" -> "c" num_ways("3") = 1
"" -> "" num_ways("") = 1
"12345" -> "a" + decode("2345") or "l" + decode("345")
"27345" -> "b" + decode("7345")
num_ways("27345") = num_ways("7345")
num_ways("011") = 0

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Solution:
Time Complexity : O(n)
Space Complexity: O(n)

// DP solution
var numDecodings = function(s) {
    // Create dp array
    const dp = Array(s.length+1).fill(0);
    // If the first number is 0 then return we cannot decode this string
    if(s[0]==='0') return 0
    // Base cases
    dp[0] = 1;
    dp[1] = 1

    for(let i = 2; i <= s.length; i++) {
        // Get values for one and two digit numbers
        const oneDigit = +s.slice(i-1, i);
        const twoDigits = +s.slice(i-2, i);
        // Check if one digit and/or two digit numbers are valid
        if(oneDigit > 0) dp[i] = dp[i-1];
        if(twoDigits >= 10 && twoDigits <= 26) dp[i] += dp[i-2]
    }    
    return dp[s.length];
};
