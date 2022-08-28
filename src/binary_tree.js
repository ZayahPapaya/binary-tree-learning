// function preOrder(root) {
//   // Root, Left, Right
//   // Return a single array
//   let traversal = [];
//   traversal.push(root.value); // Root

//   if (root.left) {
//     // Left
//     let leftTraversal = preOrder(root.left);
//     traversal = traversal.concat(leftTraversal);
//   }

//   // Right
//   if (root.right) {
//     let rightTraversal = preOrder(root.right);
//     traversal = traversal.concat(rightTraversal);
//   }

//   return traversal;
// }

const preOrder = (root) => root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];
const inOrder = (root) => root ? [...inOrder(root.left), root.value, ...inOrder(root.right)] : [];
const postOrder = (root) => root ? [...postOrder(root.left), ...postOrder(root.right), root.value] : [];

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  // preOrder() {
  //   // Root, Left, Right
  //   // Return a single array
  //   let traversal = [];
  //   traversal.push(this.value); // Root

  //   if (this.left) {
  //     // Left
  //     let leftTraversal = this.left.preOrder();
  //     traversal = traversal.concat(leftTraversal);
  //   }

  //   // Right
  //   if (this.right) {
  //     let rightTraversal = this.right.preOrder();
  //     traversal = traversal.concat(rightTraversal);
  //   }

  //   return traversal;
  // }
  preOrder = () => this.value ? [this.value, ...preOrder(this.left), ...preOrder(this.right)] : []; // root left right

  inOrder = () => this.value ? [...inOrder(this.left), this.value, ...inOrder(this.right)] : []; // left root right
  postOrder = () => this.value ? [...postOrder(this.left), ...postOrder(this.right), this.value] : []; // left right root
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder();
    //return preOrder(this.root);
  }
  inOrder() {
    return this.root.inOrder();
  }
  postOrder() {
    return this.root.postOrder();
  }
}

module.exports = { Node, BinaryTree };