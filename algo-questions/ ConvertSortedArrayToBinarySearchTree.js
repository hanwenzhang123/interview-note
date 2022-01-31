// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


var sortedArrayToBST = function(nums) {
    if(nums == null || !nums.length ) {
        return null
    }
     
    let mid = Math.floor(nums.length / 2)
    let node = new TreeNode(nums[mid])
    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length)) 
     
     return node
     
 };