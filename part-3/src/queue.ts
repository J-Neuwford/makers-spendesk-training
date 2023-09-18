class Queue<T> {
  storage: Array<T>;
  head: number;
  tail: number;
  size: number;

  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enqueue(element: T) {
    this.size++;
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue(): T | undefined {
    this.size--;
    const removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }

  isEmpty(): boolean {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const myQueue = new Queue<number>();

// enqueue
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

// Dequeue items
const item1 = myQueue.dequeue(); // Should return 1
const item2 = myQueue.dequeue(); // Should return 2

console.log(item1);
console.log(item2);

// Check if the queue is empty
const isEmpty = myQueue.isEmpty(); // Should return false

const anyQueue = new Queue<any>();
const dualQueue = new Queue<number | string>();

anyQueue.enqueue("seven");
anyQueue.enqueue(45);
anyQueue.enqueue(true);

const item3 = anyQueue.dequeue();
console.log(item3);
