const Human = require("./class");

test("throw an execption whenever the age is less than 0", ()=>{
    let name = "williams";
    let age = -4;
    let human = ()=> new Human(name, age);
    let errorMessage = "Age should not be less than zero ofcourse";
    expect(human).toThrowError(errorMessage);
})