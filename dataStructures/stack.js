class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items.push(item);
    this.count += 1;
  }

  pop() {
    if (!this.count) {
      return "Underflow";
    }

    this.count -= 1;
    return this.items.pop();
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return !this.count;
  }

  printStack() {
    if (!this.size) {
      return "Stack is empty";
    }

    return this.items.toString();
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(400);

console.log("size", stack.size());
console.log("isEmpty", stack.isEmpty());
console.log("items", stack.printStack());
console.log("removed element", stack.pop());
console.log("items", stack.printStack());
