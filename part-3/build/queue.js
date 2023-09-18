"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        this.storage = [];
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (element) {
        this.size++;
        this.storage[this.tail] = element;
        this.tail++;
    };
    Queue.prototype.dequeue = function () {
        this.size--;
        var removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    };
    Queue.prototype.isEmpty = function () {
        if (this.size === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Queue;
}());
var myQueue = new Queue();
// enqueue
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// Dequeue items
var item1 = myQueue.dequeue(); // Should return 1
var item2 = myQueue.dequeue(); // Should return 2
console.log(item1);
console.log(item2);
// Check if the queue is empty
var isEmpty = myQueue.isEmpty(); // Should return false
var anyQueue = new Queue();
anyQueue.enqueue("seven");
anyQueue.enqueue(45);
anyQueue.enqueue(true);
var item3 = anyQueue.dequeue();
console.log(item3);
