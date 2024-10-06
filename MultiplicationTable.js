const prompt= require('prompt-sync')();
let trip = prompt("Input the number of multiplcation tables you want: ");
console.log("You have requeated for",trip);


for(let i = 1; i <= trip; i++){
	for(let j = 1; j <= 12; j++){
		process.stdout.write(i + " * " + j + " = " + (i*j)+"\t\n");
	}console.log();


}