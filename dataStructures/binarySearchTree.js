class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (newNode.value === current.value) {
        return;
      }

      if (newNode.value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }

        current = current.right;
      }
    }
  }

  find(value) {
    let result = null;

    if (!this.root) {
      return result;
    }

    let current = this.root;

    while (current && !result) {
      if (value < current.left) {
        current = current.left;
      } else if (value > current.right) {
        current = current.right;
      } else {
        found = current;
      }
    }

    return result;
  }

  printTree() {
    console.log("BST: ", JSON.stringify(this.root, null, 2));
  }
}

const bst = new BinarySearchTree();

console.log("Inserted 20 to tree", bst.insert(20));
console.log("Inserted 10 to tree", bst.insert(10));
console.log("Inserted 30 to tree", bst.insert(30));

bst.printTree();

console.log("Inserted 5 to tree", bst.insert(5));
console.log("Inserted 15 to tree", bst.insert(15));
console.log("Inserted 25 to tree", bst.insert(25));
console.log("Inserted 35 to tree", bst.insert(35));

bst.printTree();
