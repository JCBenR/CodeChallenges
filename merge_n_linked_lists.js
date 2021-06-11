/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let mergedArray = [];
    lists.forEach(arr => {
       while(arr) {
            mergedArray.push(arr.val);
            arr = arr.next;
        }
    })
    
    mergedArray.sort(function(a, b){ return a - b });
    
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