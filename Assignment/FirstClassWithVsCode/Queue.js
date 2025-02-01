class Queue {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    get isEmpty() {
        return this.count == 0;
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.items.isEmpty && this.count > 0) {
            throw new Error("The stack is empty");
        }

        else {
            const removedItems = this.items[0];
            return removedItems;
        }
    }

    front() {
        return this.items[0]
    }

    peep() {
        return this.items[this.count - 1];
    }


}
module.exports = Queue;