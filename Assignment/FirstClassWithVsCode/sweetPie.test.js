const Stack = require("./sweetPie");

test("test if the new object is empty", ()=>{
    const newObject = new Stack;
    let result = newObject.isEmpty;
    expect(result).toBe(true);
})


test("test if the push method is working", ()=>{
    const newObject = new Stack;
    let expecter = newObject.push(6);
    let expected = newObject.items
    let result = [6];
    expect(expected).toEqual(result);
})

test("test if the pop method is working", ()=>{
    const newObject = new Stack;
    newObject.push(6);
    newObject.push(10);
    newObject.push(2);
    newObject.push(7);
    let result = newObject.pop()
    let expected = 7;
    expect(expected).toEqual(result);
})

test("test if the peep method is working", ()=>{
    const newObject = new Stack;
    newObject.push(6);
    newObject.push(10);
    newObject.push(2);
    newObject.push(7);
    let result = newObject.peep()
    let expected = 7;
    expect(expected).toEqual(result);
})