// null?
// different?
// isSame(right, right) && isSame(left, left)

var isSameTree = function(p, q) {
    if (p === null || q === null) { //when one is null, another is not, return false
        return p === q;     //if both are the same, return true;
    }
    if (p.val !== q.val){   //when both p or q value is different 
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);  //recursion call, check right and left
};
