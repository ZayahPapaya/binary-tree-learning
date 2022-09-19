class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [this.value, this.children.map((child) => child.preOrder()).flat()].flat();
  }
}

function fizzBuzz(tree) {
  let banana = new Tree(tree.value, tree.children);
  banana.value = fizzBuzzNode(banana.value);
  banana.children.map(fizzBuzz);
  return banana;
}

function fizzBuzzNode(value) {
  if(!value) {
    return undefined;
  };
  if(value % 3 === 0 && value % 5 === 0) {
    value = 'fizzbuzz';
  };
  if(value % 3 === 0 && value % 5 !== 0) {
    value = 'fizz';
  };
  if(value % 5 === 0 && value % 3 !== 0) {
    value = 'buzz';
  };
  return value;
}

module.exports = {
  Tree,
  fizzBuzz,
};