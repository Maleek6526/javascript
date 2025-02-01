function multiply(array){
    let answer = [];
    array.forEach((num)=>{
        let result = num * 2;
        answer.push(result);
    })
    return answer;
};

const sum = (array)=>{
    let total = 0;
    array.forEach((num) =>{
        total += num;
    })

    return total;
};

const numberGreaterThanTwo = (array)=>{
    let result = array.filter((numb)=>{
        return numb > 2;
    })
5
    return result;
};

function add(array){
    let result = array.map((num)=>{
        let answer = num + 2;
        return answer;
    })
    return result;
};


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







module.exports = {multiply, sum, numberGreaterThanTwo, add, testScoresArray,studentGradeIncrement,squareOfNumbersInAList};
