class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    async insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    async insertAtBeg(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
    }

    async deleteNode(data) {
        if (!this.head) return;
        let current = this.head;
        let prev = null;
        while (current.data !== data) {
            if (current.next === this.head) {
                console.log("Node not found");
                return;
            }
            prev = current;
            current = current.next;
        }
        if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (current === this.head) {
            this.head = this.head.next;
            this.tail.next = this.head;
        } else if (current === this.tail) {
            prev.next = this.head;
            this.tail = prev;
        } else {
            prev.next = current.next;
        }
    }

    async display() {
        if (!this.head) return;

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

const circularList = new CircularLinkedList();
circularList.insertAtEnd(1);
circularList.insertAtEnd(2);
circularList.insertAtEnd(3);
circularList.insertAtEnd(4);
circularList.insertAtBeg(0);
circularList.delete(3);
circularList.display();
