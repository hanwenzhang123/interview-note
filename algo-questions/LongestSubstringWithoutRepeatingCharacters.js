// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let star = 0
    let curr = 0
    let max = 0
    
    while(star < s.length) {
        if(!map.has(s[star])) {
            map.set(s[star], star)
            max = Math.max(max, map.size)
            star++
        }else {
            map.delete(s[curr])
            curr++
        }
    }
    return max
};