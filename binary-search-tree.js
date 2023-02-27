// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    //create new node
    const node = new TreeNode(val);
    
    //check if node is empty
    if(this.root === null) {
      //add the new node to tree and return
      this.root = node;
      return;
    }

    //if value is greater than current value
    if(currentNode.val < val){
      //if right is null, add value
      if(!currentNode.right) currentNode.right = node;

      //return function set at the right and repeat
      else{
        this.insert(val, currentNode.right);
      }
    }

    //if value is less than current value
    if(currentNode.val > val){
      //if left is null, add value
      if(!currentNode.left) currentNode.left = node;

      //return function set at the left and repeat
       else{
        this.insert(val, currentNode.left);
      }
    }

    return;
  }

  
  search(val, currentNode = this.root) {
    //check if node is empty
    if(!currentNode) return false;
    //if the nodes value is equal to target value, return true
    if(currentNode.val === val) return true;
    //if value is smaller than current, repeat with left 
    if (val < currentNode.val) return this.search(val, currentNode.left);
    //if value is larger than current, repeat with right
    if (val > currentNode.val) return this.search(val, currentNode.right);

  }


  preOrderTraversal(currentNode = this.root) {
    //Base case; if null, return
    if(!currentNode) return;

    //print value
    console.log(currentNode.val);

    //starts at the root
    //prints out the left then right recursively
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    //Base case; if null, return
    if(!currentNode) return;

    //starts at the leftmost end of the subtree 
    //up to the root
    this.inOrderTraversal(currentNode.left);

    //prints value
    console.log(currentNode.val);

    //after printing the left trees values
    //begins going down the right branch
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
     //Base case; if null, return
    if(!currentNode) return;

    //starts at the left and right subtrees
    //calls recursively 
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);

    //prints out the values at the end
    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    //create a new queue with starting root
    const queue = [this.root];

    //traverse through tree  
    //first in first out, adding the subtrees at end of queue
    while(queue.length > 0){
      const current = queue.shift();

      //if null, continue through the loop
      if(!current) continue;

      console.log(current.val);

      //push in the left subtrees first, then right
      queue.push(current.left);
      queue.push(current.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    //create a new stack and push in current root
    const stack = [];
    stack.push(this.root);

    //traverse though tree 
    // first in first out, add the subtrees at end of stack
    while(stack.length > 0){
      const node = stack.pop();
      
      //if null, continue through the loop
      if(!node) continue;

      console.log(node.val);

       //push in the left subtrees first, then right
      stack.push(node.left);
      stack.push(node.right);
    }
    
}
}