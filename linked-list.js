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

    async add(element) {
        const newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    async remove(element) {
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    async printList() {
        let current = this.head;
        let str = "";
        while (current !== null) {
            str += current.element + " ";
            current = current.next;
        }
        return str;
    }

    async deleteList() {
        this.head = null;
        this.size = 0;

    }
}

const newList = new LinkedList();
newList.add(1);
newList.add(2);
newList.add(3);
console.log(newList.printList());
ll.remove(2);
console.log(newList.printList());
newList.deleteList();
console.log(await newList.printList());