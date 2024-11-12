function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function squareNumber(number){
    return number * number;
}

const evenNumber = (array)=>{
    let evenNumbers = [];
    for (const element of array) {
        if(element % 2 == 0){
            evenNumbers.push(element);
        }
    }
    return evenNumbers;
}



module.exports = {multiply, squareNumber, evenNumber};