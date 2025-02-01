const {testScoresArray, studentGradeIncrement,squareOfNumbersInAList, trackOfExpenses, letterGrade, classTiming, listofPartyItems, listOfMembers, techStorePrices} = require("../arrayTask");


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

test("track Of Expenses", ()=>{
    arrays = {
        "groceries": 150, 
        "dining out": 100, 
        "transportation": 50, 
        "entertainment": 80 
}

    let result = trackOfExpenses(arrays);
    let answer = 380;
    expect(result).toBe(answer);
})

test("letter grade", ()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let result = letterGrade(studentScores);
    let answer = [ 'A', 'C', 'B', 'D', 'F', 'A' ];
    expect(result).toEqual(answer);
})


test("class timing", ()=>{
    let jake = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
    let result = classTiming(jake);
    let answer = [ '1:00 PM', '3:00 PM', '5:00 PM' ];
    expect(result).toEqual(answer);
})


test("list of Party Items", ()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
        ];

        let result = listofPartyItems(shoppingList);
        let answer = [
            { name: 'Apples', category: 'Fruits', isHealthy: true },
            { name: 'Carrots', category: 'Vegetables', isHealthy: true },
            { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
          ];

        expect(result).toEqual(answer);
})


test("list of members", ()=>{
    list = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = listOfMembers(list);
    let answer = ["Emily", "Jack", "Sophia", "Daniel"];
    expect(result).toEqual(answer);
})

test("tech Store Prices", ()=>{
    
const products = [ 
    { name: "Laptop", price: 1200 }, 
    { name: "Phone", price: 600 },
    { name: "Mouse", price: 25 }, 
    { name: "Monitor", price: 200 } 
];

let result = techStorePrices(products);
let answer = [ { name: 'Mouse', price: 25 } ];
expect(result).toEqual(answer);
})