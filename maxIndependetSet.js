/**
 * Given a binary tree, find the size of the Maximum Independent Set (MIS) in it.
 * [1,2,3,4,5,6,7,8] should return 1,4,6,7,8
 * 
 * recurse all the way to the bottom and marke those as true. then recurse up, and at each node see if .left and .right are marked true. If so, mark false and recurse up.
 * 
 * 1. check if it's null, if so return 0
 * 2. if left and right are null, currentNode is only note. mark it true.
 * 3. if left/right are not null, recurse through them.
 * 4. when this returns, check if the left/right node are marked true. if so, mark currentNode false, else mark true.
 * 5. if node is marked true, add to array.
 * 6. order array
 * 7. return ordered array and size.
 */

 class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.marked = null;
    }
  }
  
  let finalArray = [];
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.right.left = new Node(5);
  root.right.right = new Node(6);
  root.right.left.left = new Node(7);
  root.right.left.right = new Node(8);
  
  let findMIS = (rootNode) => {
    if (rootNode === null) {
      return 0;
    }
  
    if (rootNode.left === null && rootNode.right === null) {
      rootNode.marked = true;
    }
  
    if (rootNode.left !== null) {
      findMIS(rootNode.left);
      if (rootNode.left.marked) {
        rootNode.marked = false;
      } else {
        rootNode.marked = true;
      }
    }
  
    if (rootNode.right !== null) {
      findMIS(rootNode.right);
      if (rootNode.right.marked) {
        rootNode.marked = false;
      } else {
        rootNode.marked = true;
      }
    }
  
    if (rootNode.marked) {
      finalArray.push(rootNode.data);
    }
  
    finalArray.sort((a, b) => a - b);
    return `${[...finalArray]} and the count is ${finalArray.length}`;
  };
  
  console.log(findMIS(root));
  