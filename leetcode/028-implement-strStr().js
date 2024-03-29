var strStr = function(haystack, needle) {
    if(needle.length === 0 ) return 0
    if(!haystack.includes(needle)) return -1
    if(needle && haystack.includes(needle)){
        var arr = haystack.split(needle)
        return arr[0].length
    }
};

var strStr = function(haystack, needle) {
  if(haystack.length === 0 || needle.length === 0) return 0;
  for(let i=0; i<=haystack.length - needle.length; i++){
      if(haystack[i] == needle[0]){
        let allCharsMath = true;
        for (let j = 1; j < needle.length; j ++) {
            if (needle[j] != haystack[i + j]) {
                allCharsMath = false;
                break;
            }
        }
        if (allCharsMath) {
            return i;
        }
      }
  }
  return -1;
};

