class Stack {
    constructor() {
        this.items = [];
    }

    async push(element) {
        this.items.push(element);
    }

    async pop() {
        if (this.isEmpty()) {
            return "Empty Value";
        }
        return this.items.pop();
    }

    async peek() {
        return this.items[this.items.length - 1];
    }

    async isEmpty() {
        return this.items.length === 0;
    }

    async printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log('1',stack.printStack()); 
console.log('2',stack.peek()); 
console.log('3',stack.pop());
console.log('4',stack.printStack());
console.log('5',stack)