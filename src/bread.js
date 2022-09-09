function bread(loaf) {
  let result = [];
  let queue = [];
  if(loaf.root){
    queue.push(loaf.root);
  } else {
    return result;
  }

  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return result;
}

module.exports = { bread };