let array = [2, 4, 1, 5, 6, 7];

let firstArray = new Array(3);

let count = 1;

let counter = 0;

while(count < array.length){

	firstArray[counter] = array[count -1] + array[count];

	counter++;

	count+=2;


}

console.log(firstArray);