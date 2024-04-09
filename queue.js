class Queue {
    constructor() {
        this.items = [];
    }

    async enqueue(element) {
        this.items.push(element);
    }

    async dequeue() {
        if (this.isEmpty()) {
            return "Empty queue";
        }
        return this.items.shift();
    }

    async front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    async isEmpty() {
        return this.items.length === 0;
    }

    async printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.printQueue()); 
console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.printQueue()); 
