// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

var getIntersectionNode = function(headA, headB) {
    let cur1 = headA
    let cur2 = headB
    let n = 0
    
    if(headA == null || headB == null) {
        return null
    }
    
    while(cur1 != null) {
        n++
        cur1 = cur1.next
    }

    while(cur2 != null) {
        n-- 
        cur2 = cur2.next
    }
    
    if(cur1 != cur2) {
        return null
    }
    
    cur1 = n > 0 ? headA : headB
    cur2 = cur1 === headA ? headB : headA
    n = Math.abs(n)
    while(n != 0) {
        n--
        cur1 = cur1.next
    }
    
    while(cur1 != cur2) {
        cur1 = cur1.next
        cur2 = cur2.next
    }
    
    return cur1
};