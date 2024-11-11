let arrays = [[200,50,300,5], [10,25,7,100], [25,20,70,45], [500,170,11,35]];

let arr = new Array(3);


for (let index = 0; index < arrays.length - 1; index++) {
    arr[index] = arrays[1][index];
    
}
console.log(arr);