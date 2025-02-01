const Queue = require("./Queue");

test("test if the new object is empty", ()=>{
    const newObject = new Queue;
    let result = newObject.isEmpty;
    expect(result).toBe(true);
})

test("test if the new object is enqueue", ()=>{
    const newObject = new Queue;
    newObject.enqueue(4);
    let result = [4]
    let expected = newObject.items;
    expect(result).toEqual(expected);
})

test("test if the peep method is working", ()=>{
    const newObject = new Queue;
    newObject.enqueue(6);
    newObject.enqueue(10);
    newObject.enqueue(2);
    newObject.enqueue(7);
    let result = newObject.peep()
    let expected = 7;
    expect(expected).toEqual(result);
})

test("test if the front method is working", ()=>{
    const newObject = new Queue;
    newObject.enqueue(6);
    newObject.enqueue(10);
    newObject.enqueue(2);
    newObject.enqueue(7);
    let result = newObject.front()
    let expected = 6;
    expect(expected).toEqual(result);
})

test("test if the dequeue method is working", ()=>{
    const newObject = new Queue;
    newObject.enqueue(6);
    newObject.enqueue(10);
    newObject.enqueue(2);
    newObject.enqueue(7);
    let result = newObject.dequeue()
    let expected = 6;
    expect(expected).toEqual(result);
})