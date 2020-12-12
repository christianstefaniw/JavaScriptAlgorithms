class Node {
    #data;
    #next;

    constructor(data) {
        this.#data = data;
        this.#next = null;
    }

    getData() {
        return this.#data;
    }

    getNext() {
        return this.#next;
    }

    setNext(new_next) {
        this.#next = new_next;
    }

    represent() {
        return `Node(${this.#data})`
    }
}

class SinglyLinkedList {
    #head;

    constructor() {
        this.#head = null;
    }

    size() {
        let count = 0;
        let node = this.#head;
        while (node) {
            count++;
            node = node.getNext();
        }
        return count;
    }

    clear() {
        this.#head = null;
    }

    getLast() {
        let lastNode = this.#head;
        for (let i = 0; i < this.size()-1; i++) {
            lastNode = lastNode.getNext();
        }
        return lastNode.represent();
    }

    getFirst() {
        return this.#head.represent();
    }

    insert(data) {
        let newNode = new Node(data);
        if (this.#head == null) {
            this.#head = newNode;
        } else {
            newNode.setNext(this.#head);
            this.#head = newNode;

        }
    }

    represent() {
        let curr = this.#head;
        let str = "";
        while (curr) {
            str += curr.getData() + "->";
            curr = curr.getNext();
        }
        return str;
    }
}

function tester() {
    let linkedList = new SinglyLinkedList();
    linkedList.insert('node1');
    linkedList.insert('node2');
    linkedList.insert('node3');

    console.log("first: " + linkedList.getFirst());
    console.log("last: " + linkedList.getLast());
    console.log("size: " + linkedList.size());

    console.log("representation: " + linkedList.represent());

    linkedList.clear();
    console.log("after clear: " + linkedList.represent());

    /*
    OUTPUT:

        first: Node(node3)

        last: Node(node1)

        size: 3

        representation: node3->node2->node1->

        after clear:

     */
}

tester();
