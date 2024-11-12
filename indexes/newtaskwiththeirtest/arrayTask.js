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




module.exports = {testScoresArray,studentGradeIncrement,squareOfNumbersInAList};
