var isPalindrome = function(x) {
  const s = x.toString();
  const reversed = s.split('').reverse().join('');
  return x == reversed;
};
