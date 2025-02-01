function testScoresArray(array){
    let result = array.filter((num)=>{
        return num >= 70;
    })

    return result;
}


function studentGradeIncrement(array){
    let newArray = [];
    array.map((num)=>{
        newArray.push(num + 5);
    })
    return newArray;
}

function squareOfNumbersInAList(array){
    let newArray = []
    array.map((num)=>{
        newArray.push(num * num);
    })
    return newArray;
}


function listOfMembers(array){
    let newArray = []
    for (const element of array) {
        newArray.push(element);
    }

    return newArray;
}



function trackOfExpenses(array){
    let total = 0;
    for (const key in array) {
       total += array[key];
    }

    return total;
}


function letterGrade(array){
    let listOfLetterGrade = [];
    array.map((num)=>{
        if(num >= 90 && num <= 100) listOfLetterGrade.push('A');
        else if(num >= 80 && num <= 89) listOfLetterGrade.push('B');
        else if(num >= 70 && num <= 79) listOfLetterGrade.push('C');
        else if(num >= 60 && num <= 69) listOfLetterGrade.push('D');
        else listOfLetterGrade.push('F');
    })

    return listOfLetterGrade;
}

function classTiming(array){
    let newArray = [];
    array.filter((stringNumber)=>{
        if(stringNumber.includes("PM")) newArray.push(stringNumber);
    })

    return newArray;
}


function listofPartyItems(array){
    let result = array.filter((element)=>{
        return element.isHealthy == true;
    })
    return result;
}
/*

function eCommerce(array){
    let result = array.forEach((element)=>{
        return element.price <= 100;
    });

    return result;
}


const orders = [
    { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
    { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
    { id: 3, items: [{ price: 30, quantity: 1 }] },
   ];

   console.log(eCommerce(orders));

   */

function techStorePrices(array){
    let newArray = []
    array.forEach((num) => {
        if(num.price <= 50) newArray.push(num);
    });
    return newArray;
}

module.exports = {testScoresArray,studentGradeIncrement,squareOfNumbersInAList, trackOfExpenses, letterGrade, classTiming, listofPartyItems, listOfMembers, techStorePrices};
