class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }
  preOrder = (root) => root ? [root.value, ...this.preOrder(root.left), ...this.preOrder(root.right)] : [];
  inOrder = (root) => root ? [...this.inOrder(root.left), root.value, ...this.inOrder(root.right)] : [];
  postOrder = (root) => root ? [...this.postOrder(root.left), ...this.postOrder(root.right), root.value] : [];
  //preOrder = () => this.value ? [this.value, ...preOrder(this.left), ...preOrder(this.right)] : []; // root left right
  //inOrder = () => this.value ? [...inOrder(this.left), this.value, ...inOrder(this.right)] : []; // left root right
  //postOrder = () => this.value ? [...postOrder(this.left), ...postOrder(this.right), this.value] : []; // left right root
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    return this.root.preOrder(this.root);
    //return preOrder(this.root);
  }
  inOrder() {
    return this.root.inOrder(this.root);
  }
  postOrder() {
    return this.root.postOrder(this.root);
  }
}

module.exports = { Node, BinaryTree };