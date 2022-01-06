var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let current = result;

    while(list1 && list2){  //when both lists same length
        if(list1.val<list2.val){
            current.next = list1;
            list1 = list1.next; //push the value to the current
        } else {
            current.next = list2;
            list2 = list2.next; //push the value to the current
        }
        current = current.next;
    }
    current.next = list1 || list2;  //remaining listnode

    return result.next;
};


//Recursive
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
