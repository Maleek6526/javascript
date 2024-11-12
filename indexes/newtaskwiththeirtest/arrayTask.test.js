const {testScoresArray, studentGradeIncrement,squareOfNumbersInAList} = require("./arrayTask");


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