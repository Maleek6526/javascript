const {getArray} = require("../ArrayIncrement");


test("that there is increment in the array", ()=>{
    let input = [5,1,2,4];
    let result = getArray(input);
    let answer = [5,1,2,5];
    expect(result).toEqual(answer);
})