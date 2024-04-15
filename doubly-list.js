class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    async insertAtBeginning(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    async insertAtEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    async printLinkedList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
        let currentValue = this.tail;
        while (currentValue) {
            console.log(currentValue.data);
            currentValue = current.prev;
        }
    }

    async search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }


    async deleteAtBeginning() {
        if (this.head === null) return;
        const deletedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        deletedNode.next = null;
        deletedNode.prev = null;
    }

    async deleteAtEnd() {
        if (this.head === null) return;
        const deletedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        deletedNode.next = null;
        deletedNode.prev = null;
    }
}


const myList = new DoublyLinkedList();
myList.insertAtBeginning(10);
myList.insertAtEnd(20);
myList.insertAtBeginning(5);
console.log("List Traversal:");
myList.printLinkedList();
const foundNode = myList.search(10);
if (foundNode) {
    console.log("Node is Present:", foundNode.data);
} else {
    console.log("Node is not found");
}
myList.deleteAtBeginning();
console.log("After deleting from beginning:");
myList.printListForward();
