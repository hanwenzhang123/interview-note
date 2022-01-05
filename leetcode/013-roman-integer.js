var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if(s.length < 1) return 0;
    let array = [...s];
    let value = 0;
    for (let i = 0; i < array.length; i++) {
        let current = map[array[i]];
        let next = map[array[i + 1]];
        if (next > current) {
            value += next - current;
            i++;
        } else {
            value += current;
        }
    }
    return value;
};
 
