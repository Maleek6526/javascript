class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    get isEmpty(){
        return this.count == 0;
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    pop(){
        if(this.items.isEmpty && this.count > 0){
            throw new Error("The stack is empty");
        }

        else{
            const removedItems = this.items[this.count - 1];
        this.count--;
        return removedItems;
        }

        
    }

    peep(){
        return this.items[this.count - 1];
    }

}

module.exports = Stack;