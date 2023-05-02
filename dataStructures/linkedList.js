class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    this.size += 1;

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    const node = new Node(element);
    this.size += 1;

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    let previous = null;
    let iterator = 0;

    while (iterator < index) {
      iterator += 1;

      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter a valid index");
      return;
    }

    let current = this.head;
    let previous = current;
    this.size -= 1;

    if (index === 0) {
      this.head = current.next;
      return current.element;
    }

    let iterator = 0;

    while (iterator < index) {
      iterator += 1;

      previous = current;
      current = current.next;
    }

    previous.next = current.next;

    return current.element;
  }

  indexOf(element) {
    let count = 0;
    let current = this.head;

    if (current.element === element) {
      return count;
    }

    while (current) {
      if (current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    return -1;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return !this.size;
  }

  printList() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.element + " ";
      current = current.next;
    }
 
    console.log("List elements: ", JSON.stringify(this.head, null, 2));
  }
}

const linkedList = new LinkedList();

console.log("Initial size", linkedList.getSize());
console.log("Initial empty status", linkedList.isEmpty());

console.log("Adding 20", linkedList.add(20));
console.log("Adding 40", linkedList.add(40));

console.log("After adding 2 elements size", linkedList.getSize());
console.log("After adding 2 elements empty status", linkedList.isEmpty());
linkedList.printList();

console.log("Adding element to 1 index", linkedList.insertAt(30, 1));

console.log("After adding element to 1 index size", linkedList.getSize());
console.log(
  "After adding element to 1 index empty status",
  linkedList.isEmpty()
);
linkedList.printList();

console.log("Index of 30", linkedList.indexOf(30));

console.log("Removing last index element", linkedList.removeFrom(2));
console.log("After removing last index element size", linkedList.getSize());
console.log(
  "After removing last index element empty status",
  linkedList.isEmpty()
);
linkedList.printList();
