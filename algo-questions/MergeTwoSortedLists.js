// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode()
    let head = dummyHead
    
    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            dummyHead.next = l1
            l1 = l1.next
        }else {
            dummyHead.next = l2
            l2 = l2.next
        }
        dummyHead = dummyHead.next
    }
    
    if(l1 !== null) {
        dummyHead.next = l1
    }else {
        dummyHead.next = l2
    }
    
    return head.next
    
};