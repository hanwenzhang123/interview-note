// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode()
    let head = dummyHead
    let carry = 0
    
    while(l1 !== null || l2 !== null) {
        let val1 = l1 == null ? 0 : l1.val
        let val2 = l2 == null ? 0 : l2.val
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        dummyHead.next = new ListNode(sum % 10)
        dummyHead = dummyHead.next
        l1 = l1 == null ? null : l1.next
        l2 = l2 == null ? null : l2.next
        
    }
    
    if(carry > 0) {
        dummyHead.next = new ListNode(carry)
    }
    
    return head.next
};