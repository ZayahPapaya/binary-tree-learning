const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTree extends BinaryTree {
  add(number) {
    let newNode = new Node(number, undefined, undefined);

    if (this.root === undefined) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (number === current.value) return undefined;
      if (number < current.value) {
        if (current.left === undefined) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === undefined) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(number) {
    if (this.root === undefined) { return false }; // no list, no number found
    let tracker = this.root;
    while (tracker) {
      if (number === tracker.value) { return true }; // if current target is number (including root) return true
      if (tracker.left === undefined && tracker.right === undefined) { return false }; // if node has no children return false because there's no list left to search
      if (number < tracker.value) { // if number is less than the node, go left because left is lesser numbers
        tracker = tracker.left;
      } else if (number > tracker.value) {
        tracker = tracker.right; // if number is larger than the node, go right because right is larger numbers
      } //else {
      //return false
      //}
    }
  }

  findMax() {
    if (this.root === undefined) { return undefined };
    let max = undefined;
    this.preOrder().forEach(value => {
      if (value > max || !max) {
        max = value
      }
    });
    return max;
  }
}

module.exports = { BinarySearchTree };