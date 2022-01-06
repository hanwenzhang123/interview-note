var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let current = result;   //a dummy node to point to the next value

    while(list1 && list2){  //when both lists have value
        if(list1.val<list2.val){
            current.next = list1;  //let next points to list1 value
            list1 = list1.next; //push the next value to the list1
        } else {
            current.next = list2; //let next points to list2 value
            list2 = list2.next; //push the next value to the list2
        }
        current = current.next; //change current to current.next (either list1 or list2) based on the comparison to avoid overwritten
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
