/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 1. add all vals of l1 to array
 2. add all vals of l2 to array
 3. sort
 4. make linked list of nodes out of vals
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let mergedArray = [];
    while(l1 !== null){
        mergedArray.push(parseInt(l1.val));
        l1 = l1.next;
    }
    
    while(l2 !== null){
        mergedArray.push(parseInt(l2.val));
        l2 = l2.next;
    }
    
    mergedArray.sort(function(a, b){ return a - b });//necessary to sort numbers
    
    if(mergedArray.length === 1) return new ListNode(mergedArray[0], null);
    let list = new ListNode();
    let head = list;
    for(let i =0; i < mergedArray.length; i++){
        let newNode = new ListNode(mergedArray[i]);
        list.next = newNode;
        list = list.next;
    }
    
    return head.next;
    
};


/**
 * this recursive solution is really clever (not mine)
 */

 var mergeTwoLists2 = function(l1, l2) {
    if(!l1 || !l2) return l1||l2
    if(l1.val<l2.val){
        l1.next=mergeTwoLists2(l1.next,l2)
        return l1
    }
    l2.next=mergeTwoLists2(l2.next,l1)
    return l2
};