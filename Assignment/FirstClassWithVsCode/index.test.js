const {multiply, squareNumber, evenNumber} = require("./index")


test("multiply two numbers", ()=>{

    //Arrange
    let firstNumber = 4;
    const secondNumber = 5;

    //Act
    let result = multiply(firstNumber, secondNumber)

    //Assert
    let answer = 20;
    expect(result).toBe(answer);
})


test("square a number", ()=>{
    //Arrange
    let number = 2;

    //Act
    let result = squareNumber(number);

    //Assert
    let answer = 4;
    expect(result).toBe(answer);
})


test("test for even number", ()=>{
    //Arrange
    let arrayOfNumbers = [1, 2, 3, 4, 5, 8];

    //Act
    let result = evenNumber(arrayOfNumbers);

    //Assert

    let answer = [2, 4, 8];
    expect(result).toEqual(answer);
})