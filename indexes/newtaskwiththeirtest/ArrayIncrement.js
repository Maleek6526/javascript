function getArray(array){

    let text = "";

    let newArray = [];
    for(let index = 0; index < array.length; index++){
        text += array[index];
    }

    let numberConversion = Number(text);

    numberConversion += 1;

    let stringConversion = String(numberConversion);

    for (const character of stringConversion) {
        newArray.push(Number(character))
    }
    
    return newArray;
}


module.exports = {getArray};