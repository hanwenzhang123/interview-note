var wordPattern = function(pattern, s) {
    let sArray = s.split(" ");
    if (sArray.length !== pattern.length) return false;
    let map = {};
    for (let i = 0; i<pattern.length; i++){
        let char = pattern.charAt(i);
        if(map[char]) {
            if(map[char] !== sArray[i]) return false;
        } else {
            if(Object.values(map).includes(sArray[i])) return false;
            map[char] = sArray[i]
        }
    }
    return true;
};
