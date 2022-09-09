const { BinaryTree, Node } = require("../src/binary_tree");
const { bread } = require("../src/bread");

describe("Bread", () => {
  const tree = new BinaryTree(
    new Node(
      2,
      new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))),
      new Node(5, undefined, new Node(9, new Node(4)))
    )
  );

  //          2
  //        /   \
  //       7     5
  //      / \     \
  //     2   6     9
  //        / \   /
  //       5  11 4

  it("does an breadth-first traversal", () => {
    expect(bread(tree)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });

  const empty = new BinaryTree();
  it("Works with an empty tree", () => {
    expect(bread(empty)).toEqual([]);
  });
});