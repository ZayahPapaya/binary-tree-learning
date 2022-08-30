
const preOrder = (root) => root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];
const inOrder = (root) => root ? [...inOrder(root.left), root.value, ...inOrder(root.right)] : [];
const postOrder = (root) => root ? [...postOrder(root.left), ...postOrder(root.right), root.value] : [];

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }
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