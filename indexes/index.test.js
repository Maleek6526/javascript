const {multiply, sum, numberGreaterThanTwo, add, testScoresArray, studentGradeIncrement,squareOfNumbersInAList} = require("./index");

test("multiply each number by 2", ()=>{
    const arrayOfNumbers = [1,2,3,4,5];
    let result = multiply(arrayOfNumbers);
    let answer = [2,4,6,8,10];
    expect(result).toEqual(answer);
});

test("sum all tyhe elements in the array", ()=>{
    const number = [1,2,3,4,5];
    let result = sum(number);
    let answer = 15;
    expect(result).toEqual(answer);
});

test("numbers greater than two", ()=>{
    const numbers = [1,2,3,4,5];
    let result = numberGreaterThanTwo(numbers);
    let answers = [3,4,5];
    expect(result).toEqual(answers);
});

test("add two of each number", ()=>{
    const arrayOfNumbers = [1,2,3,4,5];
    let result = add(arrayOfNumbers);
    let answer = [3,4,5,6,7];
    expect(result).toEqual(answer);
});



test("test scores array", ()=>{
    let testScores = [70,45,78,90,39,67,76,61,28,92];
    let result = testScoresArray(testScores);
    let answer = [70,78,90,76,92];
    expect(result).toEqual(answer);
})

test("student grade increment", ()=>{
    let studentScore = [85,92,78,88,95];
    let result = studentGradeIncrement(studentScore);
    let answer = [90,97,83,93,100];
    expect(result).toEqual(answer);
})


test("square Of Numbers In A List", ()=>{
    let list = [2,4,6,8,10];
    let result = squareOfNumbersInAList(list);
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})