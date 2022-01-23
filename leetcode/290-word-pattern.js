var canWinNim = function(n) {
    if(n%4==0){ // if n comes in multiple of 4 surely friend will win
      return false;
    } else {
      return true;
    }
};
