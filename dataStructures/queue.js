class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail += 1
  }

  dequeue() {
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head += 1
    return item
  }

  peek() {
    return this.items[this.head]
  }

  printQueue() {
    console.log(this.items)
  }
}

const queue = new Queue()

queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(50)

queue.printQueue()

console.log("peek", queue.peek())
console.log("Removed", queue.dequeue())

queue.printQueue()
console.log("peek", queue.peek())
