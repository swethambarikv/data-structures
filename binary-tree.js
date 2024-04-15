class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    async insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    async insertNode(currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertNode(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertNode(currentNode.right, newNode);
            }
        }
    }

    async search(data) {
        return this.searchNode(this.root, data);
    }

    async searchNode(currentNode, data) {
        if (currentNode === null) {
            return false;
        } else if (data < currentNode.data) {
            return this.searchNode(currentNode.left, data);
        } else if (data > currentNode.data) {
            return this.searchNode(currentNode.right, data);
        } else {
            return true;
        }
    }

    async preOrderTraversal(currentNode) {
        if (currentNode !== null) {
            console.log(currentNode.data);
            this.preOrderTraversal(currentNode.left);
            this.preOrderTraversal(currentNode.right);
        }
    }

    async inOrderTraversal(currentNode) {
        if (currentNode !== null) {
            this.inOrderTraversal(currentNode.left);
            console.log(currentNode.data);
            this.inOrderTraversal(currentNode.right);
        }
    }

    async postOrderTraversal(currentNode) {
        if (currentNode !== null) {
            this.postOrderTraversal(currentNode.left);
            this.postOrderTraversal(currentNode.right);
            console.log(currentNode.data);
        }
    }
}

const data = new BinaryTree();
data.insert(5);
data.insert(3);
data.insert(7);
data.insert(2);
data.insert(4);
data.insert(6);
data.insert(8);

console.log("Pre-order traversal:");
data.preOrderTraversal(data.root);

console.log("In-order traversal:");
data.inOrderTraversal(data.root);

console.log("Post-order traversal:");
data.postOrderTraversal(data.root);
